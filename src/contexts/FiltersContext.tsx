import React from "react"
import { Filters } from "@/types/filters"

const INITIAL_FILTERS: Filters = {
  status: "ALL",
  search: "" // empty string is a subset of every string
}

export type FiltersContext = {
  filters: Filters
  setFilters: (filters: Filters) => void
}

export const FiltersContext = React.createContext<FiltersContext>({
  filters: INITIAL_FILTERS,
  setFilters: () => {}
})

export interface FiltersProviderProps {
  children: React.ReactNode
}

export const FiltersProvider: React.FC<FiltersProviderProps> = ({
  children
}) => {
  const [filters, setFilters] = React.useState(INITIAL_FILTERS)

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
