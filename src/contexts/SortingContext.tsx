import React from "react"
import { Sorting, SortingType, SortingOrder } from "@/types/sorting"

const INITIAL_SORTING: Sorting = {
  type: SortingType.DATE,
  order: SortingOrder.DESC // show the newest first
}

export type SortingCotext = {
  sorting: Sorting
  setSorting: (sorting: Sorting) => void
}

export const SortingContext = React.createContext<SortingCotext>({
  sorting: INITIAL_SORTING,
  setSorting: () => {}
})

export interface SortingProviderProps {
  children: React.ReactNode
}

export const SortingProvider: React.FC<SortingProviderProps> = ({
  children
}) => {
  const [sorting, setSorting] = React.useState(INITIAL_SORTING)

  return (
    <SortingContext.Provider
      value={{
        sorting,
        setSorting
      }}
    >
      {children}
    </SortingContext.Provider>
  )
}
