"use client"

import React from "react"
import { Task } from "@/types/task"

import { useTasks } from "@/hooks/useTasks"

import { Button } from "@radix-ui/themes"

export interface UpdateProps {
  id: Task["id"]
}

export const Delete: React.FC<UpdateProps> = ({ id }) => {
  const { tasks, deleteTask } = useTasks()
  const task = tasks.find((task) => task.id === id)

  if (!task) return null

  return <Button onClick={() => deleteTask(id)}>Remove Task</Button>
}
