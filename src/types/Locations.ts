type Schedule = {
  weekdays: string
  hour: string
}

export type Locales = {
  id: number
  title: string
  content: string
  opened: boolean
  mask: string
  towel: string
  fountain: string
  locker_room: string
  schedules: Schedule[]
}

export type Locations = {
  current_country_id: number
  wp_total: number
  total: number
  locations: Locales[]
}
