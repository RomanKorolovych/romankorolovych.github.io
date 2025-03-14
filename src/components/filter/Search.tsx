import React from "react"

import { useTaskFilters } from "@/hooks/useTaskFilters"

import { TextField } from "@radix-ui/themes"

export interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const { filters, setFilters } = useTaskFilters()

  return (
    <TextField.Root
      value={filters.search}
      onChange={(e) =>
        setFilters({
          ...filters,
          search: e.target.value
        })
      }
      placeholder="Search by name"
    ></TextField.Root>
  )
}
