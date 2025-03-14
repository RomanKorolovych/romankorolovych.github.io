import React from "react"
import { Status } from "@/types/task"

import { useTasks } from "@/hooks/useTasks"

import { Task } from "@/types/task"
import { Update } from "./Update"
import { Delete } from "./Delete"
import { Card as BaseCard, Text, Box, Checkbox } from "@radix-ui/themes"

export interface TaskCardProps {
  task: Task
}

export const Card: React.FC<TaskCardProps> = ({ task }) => {
  const { updateTask } = useTasks()

  return (
    <BaseCard>
      <Checkbox
        checked={task.status === "DONE"}
        onCheckedChange={(isChecked) =>
          updateTask(task.id, {
            status: isChecked ? Status.DONE : Status.PENDING
          })
        }
      />
      <Box>
        <Text>{task.name}</Text>
        <Text>{task.description}</Text>
      </Box>
      <Delete id={task.id} />
      <Update id={task.id} />
    </BaseCard>
  )
}
