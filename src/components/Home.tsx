'use client'

import Items from './Items'
import { FilteredResultsProvider } from './Provider'
import CardResults from './cards/CardResults'
import CardSpecifications from './cards/CardSpecifications'

export default function Home() {
  return (
    <FilteredResultsProvider>
      <CardSpecifications />
      <Items />
      <CardResults />
    </FilteredResultsProvider>
  )
}
