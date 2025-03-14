import React from "react"
import { SortingOrder, Sorting } from "@/types/sorting"

import { useTaskSorting } from "@/hooks/useTaskSorting"

import { Select } from "@radix-ui/themes"

export interface OrderProps {}

export const Order: React.FC<OrderProps> = () => {
  const { sorting, setSorting } = useTaskSorting()

  return (
    <Select.Root
      value={sorting.order}
      onValueChange={(order: Sorting["order"]) =>
        setSorting({
          ...sorting,
          order
        })
      }
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Status</Select.Label>
          <Select.Item value={SortingOrder.ASC}>Ascending</Select.Item>
          <Select.Item value={SortingOrder.DESC}>Descending</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
