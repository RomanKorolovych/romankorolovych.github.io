import React from "react"

import { Task } from "@/types/task"
import { SortingType } from "@/types/sorting"
import { Status } from "@/types/task"

import { SortingContext } from "@/contexts/SortingContext"

// All sorters are sorting in ascending order
const sorters = {
  [SortingType.DATE]: (a: Task, b: Task) => {
    const x = a.creationDate
    const y = b.creationDate

    if (x < y) return -1
    if (x > y) return 1

    return 0
  },
  [SortingType.STATUS]: (a: Task, b: Task) => {
    const x = a.status
    const y = b.status

    if (x === Status.PENDING) return -1
    if (y === Status.PENDING) return 1

    return 0
  }
}

export const useTaskSorting = () => {
  const { sorting, setSorting } = React.useContext(SortingContext)

  const applySorting = (tasks: Task[]) => {
    const sorter = sorters[sorting.type]
    return tasks.toSorted((a, b) => {
      // Invert order if doesn't match sorter's one
      return sorting.order === "ASC" ? sorter(a, b) : -sorter(a, b)
    })
  }

  return {
    sorting,
    setSorting,
    applySorting
  }
}
