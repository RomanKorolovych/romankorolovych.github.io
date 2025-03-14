import React from "react"
import { SortingType, Sorting } from "@/types/sorting"

import { useTaskSorting } from "@/hooks/useTaskSorting"

import { Select } from "@radix-ui/themes"

export interface TypeProps {}

export const Type: React.FC<TypeProps> = () => {
  const { sorting, setSorting } = useTaskSorting()

  return (
    <Select.Root
      value={sorting.type}
      onValueChange={(type: Sorting["type"]) =>
        setSorting({
          ...sorting,
          type
        })
      }
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Status</Select.Label>
          <Select.Item value={SortingType.DATE}>Date</Select.Item>
          <Select.Item value={SortingType.STATUS}>Status</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
