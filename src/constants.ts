import { Status, TaskPayload } from "@/types/task"

export const TASKS_KEY = "tasks"

export const NEW_TASK: TaskPayload = {
  name: "",
  description: "",
  status: Status.PENDING
}
