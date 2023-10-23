import { Locales } from '@/types/Locations'

interface filterUnitsProps {
  open_hour: string
  close_hour: string
  results: Locales[]
  showOfClosedUnits?: boolean
}

const filterUnits = ({
  open_hour,
  close_hour,
  results,
  showOfClosedUnits,
}: filterUnitsProps) => {
  const transform_weekday = (weekdays: number) => {
    switch (weekdays) {
      case 0:
        return 'Dom.'
      case 6:
        return 'Sáb.'
      default:
        return 'Seg. à Sex.'
    }
  }
  const start_hour_filter = parseInt(open_hour, 10)
  const end_hour_filter = parseInt(close_hour, 10)

  const filteredResults = results.filter((item) => {
    const todays_weekday = transform_weekday(new Date().getDay())
    const hour = new Date().getHours()

    if (!item.schedules) return false
    for (let i = 0; i < item.schedules.length; i++) {
      const schedule_hour = item.schedules[i].hour
      const schedule_weekday = item.schedules[i].weekdays

      if (todays_weekday === schedule_weekday) {
        if (schedule_hour !== 'Fechada') {
          const [open_hour, close_hour] = schedule_hour.split(' às ')
          const open_hour_int = parseInt(open_hour.replace(/h.*/, ''), 10)
          const close_hour_int = parseInt(close_hour.replace('/h.*/', ''), 10)

          if (start_hour_filter >= open_hour_int && hour <= close_hour_int) {
            return true
          } else {
            return showOfClosedUnits
          }
        } else if (schedule_hour === 'Fechada') {
          return showOfClosedUnits
        }
      }
    }
    return false
  })
  return filteredResults
}

export default filterUnits
