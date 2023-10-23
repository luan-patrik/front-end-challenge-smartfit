import useSWR from 'swr'
import { Locations } from '@/types/Locations'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useGetLocales = () => {
  return useSWR<Locations>(
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
    fetcher,
    { keepPreviousData: true },
  )
}
