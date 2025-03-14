import React from "react"
import { Status as TaskStatus } from "@/types/task"
import { Filters } from "@/types/filters"

import { useTaskFilters } from "@/hooks/useTaskFilters"

import { Select } from "@radix-ui/themes"

export interface StatusProps {}

export const Status: React.FC<StatusProps> = () => {
  const { filters, setFilters } = useTaskFilters()

  return (
    <Select.Root
      value={filters.status}
      onValueChange={(status: Filters["status"]) =>
        setFilters({
          ...filters,
          status
        })
      }
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Status</Select.Label>
          <Select.Item value={"ALL"}>All</Select.Item>
          <Select.Item value={TaskStatus.DONE}>Done</Select.Item>
          <Select.Item value={TaskStatus.PENDING}>Pending</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
