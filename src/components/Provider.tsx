import { Locales } from '@/types/Locations'
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface FilteredResultsContextProps {
  filteredResults: Locales[]
  setFilteredResults: Dispatch<SetStateAction<Locales[]>>
}

const FilteredResultsContext = createContext<
  FilteredResultsContextProps | undefined
>(undefined)

export function useFilteredResults() {
  const context = useContext(FilteredResultsContext)
  if (context === undefined) {
    throw new Error('Error')
  }

  return context
}

export function FilteredResultsProvider({ children }: { children: ReactNode }) {
  const [filteredResults, setFilteredResults] = useState<Locales[]>([])

  return (
    <FilteredResultsContext.Provider
      value={{ filteredResults, setFilteredResults }}
    >
      {children}
    </FilteredResultsContext.Provider>
  )
}
