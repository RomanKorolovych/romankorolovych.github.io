import React from "react"
import { Task } from "@/types/task"

import { useTasks } from "@/hooks/useTasks"
import { useTaskFilters } from "@/hooks/useTaskFilters"
import { useTaskSorting } from "@/hooks/useTaskSorting"

import { Flex } from "@radix-ui/themes"

export interface ListProps {
  children: (props: { tasks: Task[] }) => React.ReactNode[]
}

export const List: React.FC<ListProps> = ({ children }) => {
  const { tasks } = useTasks()
  const { filters, applyFilters } = useTaskFilters()
  const { sorting, applySorting } = useTaskSorting()
  const processed = React.useMemo(
    () => applySorting(applyFilters(tasks)),
    [filters, sorting, tasks]
  )

  return (
    <Flex direction="column" gap="3">
      {children({
        tasks: processed
      })}
    </Flex>
  )
}
