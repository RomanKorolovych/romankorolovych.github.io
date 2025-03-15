import React from "react"

import { useTasks } from "@/hooks/useTasks"
import { useTaskFilters } from "@/hooks/useTaskFilters"
import { useTaskSorting } from "@/hooks/useTaskSorting"

import { Flex, Text } from "@radix-ui/themes"
import * as Task from "@/components/task"

export interface ListProps { }

export const TaskList: React.FC<ListProps> = () => {
  const { tasks } = useTasks()
  const { filters, applyFilters } = useTaskFilters()
  const { sorting, applySorting } = useTaskSorting()
  const processed = React.useMemo(
    () => applySorting(applyFilters(tasks)),
    [filters, sorting, tasks]
  )

  if (tasks.length === 0) {
    return (
      <Flex direction="column" gap="3">
        <Text align="center" weight="bold" size="5">
          Nothing to do... Maybe have a tea?
        </Text>
      </Flex>
    )
  }

  return (
    <Flex direction="column" gap="3">
      {processed.length === 0 ? (
        <Text align="center" weight="bold" size="5">
          No task matches criteria
        </Text>
      ) : processed.map((task) => <Task.Card key={task.id} task={task} />)}
    </Flex>
  )
}

