import { Status } from "@/types/task"

export interface Filters {
  status: Status | "ALL"
  search: string
}
