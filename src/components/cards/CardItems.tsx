import Image from 'next/image'
import { Label } from '../ui/label'

interface CardItemsProps {
  title?: string
  requiredSrc?: string
  requiredAlt?: string
  labelRequired?: string
  recommendSrc?: string
  recommendAlt?: string
  labelRecommended?: string
  forbiddenSrc?: string
  forbiddenAlt?: string
  labelForbidden?: string
}

const CardItems = ({
  title,
  requiredSrc,
  requiredAlt,
  labelRequired,
  recommendSrc,
  recommendAlt,
  labelRecommended,
  forbiddenSrc,
  forbiddenAlt,
  labelForbidden,
}: CardItemsProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Label className="text-base font-bold">{title}</Label>
      <div className="flex flex-col gap-2 min-[440px]:flex-row">
        {requiredSrc && (
          <div className="flex flex-col items-center ">
            <Image
              src={requiredSrc || ''}
              width={80}
              height={80}
              alt={requiredAlt || ''}
              priority
            />
            <p>{labelRequired}</p>
          </div>
        )}
        {recommendSrc && (
          <div className="flex flex-col items-center ">
            <Image
              src={recommendSrc || ''}
              width={80}
              height={80}
              alt={recommendAlt || ''}
              priority
            />
            <p>{labelRecommended}</p>
          </div>
        )}
        {forbiddenSrc && (
          <div className="flex flex-col items-center ">
            <Image
              src={forbiddenSrc || ''}
              width={80}
              height={80}
              alt={forbiddenAlt || ''}
              priority
            />
            <p>{labelForbidden}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardItems
