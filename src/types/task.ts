export enum Status {
  PENDING = "PENDING",
  DONE = "DONE"
}

export type Task = {
  id: string
  name: string
  description: string
  status: Status
  creationDate: Date
}

export type TaskPayload = Pick<Task, "name" | "description" | "status">
