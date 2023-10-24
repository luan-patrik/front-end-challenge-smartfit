import Home from '@/components/Home'
import { Separator } from '@/components/ui/separator'

export default function PageHome() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-4xl font-bold">
        <h1>REABERTURA</h1>
        <h1>SMART FIT</h1>
        <Separator className="w-20 border-4 border-foreground" />
      </div>
      <p className="text-sm">
        O horário de funcionamento das nossas unidades está seguindo os decretos
        de cada município. Por isso, confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo.
      </p>
      <Home />
    </div>
  )
}
