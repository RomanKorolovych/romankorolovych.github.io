import React from "react"
import { TASKS_KEY } from "@/constants"
import { generateId } from "@/lib/generateId"

import { Task, TaskPayload } from "@/types/task"

import { useLocalStorage } from "@uidotdev/usehooks"

const useTasks = () => {
  const [raw, handleSetTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const tasks = React.useMemo(() => parse(raw), [raw])

  const createTask = (payload: TaskPayload) => {
    handleSetTasks(
      tasks.concat({
        ...payload,
        id: generateId(),
        creationDate: new Date()
      })
    )
  }

  const updateTask = (id: Task["id"], payload: Partial<TaskPayload>) => {
    handleSetTasks(
      tasks.map((existing) => {
        if (existing.id !== id) return existing

        return {
          ...existing,
          ...payload
        }
      })
    )
  }

  const deleteTask = (id: Task["id"]) => {
    handleSetTasks(tasks.filter((existing) => existing.id !== id))
  }

  return {
    tasks,
    createTask,
    updateTask,
    deleteTask
  }
}

const parse = (tasks: Task[]): Task[] => tasks.map((task) => ({
  ...task,
  creationDate: new Date(task.creationDate)
}))

export { useTasks }
