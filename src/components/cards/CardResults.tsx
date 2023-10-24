import { useFilteredResults } from '../Provider'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'
import CardItems from './CardItems'

const CardResults = () => {
  const { filteredResults } = useFilteredResults()

  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredResults.map((item) => (
        <Card key={item.id} className="h-full w-full p-4">
          <CardHeader className="p-0">
            <span
              className={`font-bold ${
                item.opened === true ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {item.opened === true ? 'Aberto' : 'Fechado'}
            </span>
            <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
            <CardDescription
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></CardDescription>
          </CardHeader>
          <Separator className='my-4'/>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-center gap-4">
              {item.mask === 'required' ? (
                <CardItems requiredSrc={'/assets/items/required-mask.png'} />
              ) : (
                item.mask === 'recommended' && (
                  <CardItems recommendSrc="/assets/items/recommended-mask.png" />
                )
              )}

              {item.towel === 'required' ? (
                <CardItems requiredSrc={'/assets/items/required-towel.png'} />
              ) : (
                item.towel === 'recommended' && (
                  <CardItems recommendSrc="/assets/items/recommended-towel.png" />
                )
              )}

              {item.fountain === 'partial' ? (
                <CardItems requiredSrc={'/assets/items/partial-fountain.png'} />
              ) : (
                item.fountain === 'not-allowed' && (
                  <CardItems forbiddenSrc="/assets/items/forbidden-fountain.png" />
                )
              )}

              {item.locker_room === 'allowed' ? (
                <CardItems
                  requiredSrc={'/assets/items/required-lockerroom.png'}
                />
              ) : item.locker_room === 'partial' ? (
                <CardItems recommendSrc="/assets/items/partial-lockerroom.png" />
              ) : (
                item.locker_room === 'closed' && (
                  <CardItems forbiddenSrc="/assets/items/forbidden-lockerroom.png" />
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {item.schedules.map((schedule, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold">{schedule.weekdays}</h3>
                  <p>{schedule.hour}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CardResults
