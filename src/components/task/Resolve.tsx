"use client"

import React from "react"
import { Task, Status } from "@/types/task"

import { useTasks } from "@/hooks/useTasks"

import { Button } from "@radix-ui/themes"

export interface UpdateProps {
  id: Task["id"]
}

export const Resolve: React.FC<UpdateProps> = ({ id }) => {
  const { tasks, updateTask } = useTasks()
  const task = tasks.find((task) => task.id === id)

  if (!task) return null

  return (
    <Button
      color={task.status === "DONE" ? "jade" : "ruby"}
      onClick={() =>
        updateTask(id, {
          status: task.status === Status.DONE ? Status.PENDING : Status.DONE
        })
      }
    >
      {task.status === Status.DONE ? "Done!" : "Pending..."}
    </Button>
  )
}
