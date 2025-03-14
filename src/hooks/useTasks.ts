import { TASKS_KEY } from "@/constants"
import { generateId } from "@/lib/generateId"

import { Task, TaskPayload } from "@/types/task"

import { useLocalStorage } from "@uidotdev/usehooks"

const useTasks = () => {
  const [tasks, handleSetTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

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

export { useTasks }
