import CardItems from './cards/CardItems'
import { Card, CardContent } from './ui/card'

const Items = () => {
  return (
    <Card className="bg-border p-6">
      <CardContent className="md: grid grid-cols-1 place-items-center gap-y-4 place-self-center p-0 md:grid-cols-2 xl:grid-cols-4">
        <CardItems
          title="Máscara"
          requiredSrc="/assets/items/required-mask.png"
          requiredAlt="Máscara obrigatória"
          recommendSrc="/assets/items/recommended-mask.png"
          recommendAlt="Máscara recomendada"
          labelRequired="Obrigatório"
          labelRecommended="Recomendado"
        />
        <CardItems
          title="Toalha"
          requiredSrc="/assets/items/required-towel.png"
          requiredAlt="Toalha obrigatória"
          recommendSrc="/assets/items/recommended-towel.png"
          recommendAlt="Toalha recomendada"
          labelRequired="Obrigatório"
          labelRecommended="Recomendado"
        />
        <CardItems
          title="Bebedouro"
          recommendSrc="/assets/items/partial-fountain.png"
          recommendAlt="Bebedouro parcialmente liberado"
          forbiddenSrc="/assets/items/forbidden-fountain.png"
          forbiddenAlt="Bebedouro proibido"
          labelRecommended="Parcial"
          labelForbidden="Proibido"
        />
        <CardItems
          title="Vestiários"
          requiredSrc="/assets/items/required-lockerroom.png"
          requiredAlt="Vestiário liberado"
          recommendSrc="/assets/items/partial-lockerroom.png"
          recommendAlt="Vestiário parcialmente liberado"
          forbiddenSrc="/assets/items/forbidden-lockerroom.png"
          labelRequired="Liberado"
          labelRecommended="Parcial"
          labelForbidden="Fechado"
        />
      </CardContent>
    </Card>
  )
}

export default Items
