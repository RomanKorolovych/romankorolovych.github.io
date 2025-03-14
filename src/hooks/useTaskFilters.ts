import React from "react"

import { Task } from "@/types/task"
import { Filters } from "@/types/filters"

import { FiltersContext } from "@/contexts/FiltersContext"

const validators = {
  status: (status: Filters["status"], task: Task) => {
    return status === "ALL" ? true : task.status === status
  },
  search: (search: Filters["search"], task: Task) => {
    return task.name.toLowerCase().includes(search.toLowerCase()) // naive
  }
}

export const useTaskFilters = () => {
  const { filters, setFilters } = React.useContext(FiltersContext)

  const applyFilters = (tasks: Task[]) => {
    return tasks.filter((task) => {
      return Object.entries(filters).every(([criteria, value]) =>
        validators[criteria as keyof Filters](value, task)
      )
    })
  }

  return {
    filters,
    setFilters,
    applyFilters
  }
}
