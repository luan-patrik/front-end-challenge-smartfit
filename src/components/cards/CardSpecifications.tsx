'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Separator } from '../ui/separator'
import { FormField } from '../ui/form'
import { useGetLocales } from '@/hooks/use-get-locales'
import { formRequest, formValidator } from '@/lib/validator/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import filterUnits from '@/services/filter'
import { useFilteredResults } from '../Provider'

type OPENING_HOURS_PROPS = 'morning' | 'afternoon' | 'night'

const OPENING_HOURS = {
  morning: {
    from: '06',
    to: '12',
  },
  afternoon: {
    from: '12',
    to: '18',
  },
  night: {
    from: '18',
    to: '23',
  },
}

type FormData = z.infer<typeof formValidator>

const CardSpecifications = () => {
  const { data: results, isLoading, error } = useGetLocales()

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formValidator),
    defaultValues: {
      showOfClosedUnits: false,
      timeOfDay: '',
    },
  })

  const { filteredResults, setFilteredResults } = useFilteredResults()

  if (isLoading) return 'Carregando...'

  if (!results) throw new Error('Nenhum resultado encontrado.')

  const onSubmit = ({ timeOfDay, showOfClosedUnits }: formRequest) => {
    const OPEN_HOUR = OPENING_HOURS[timeOfDay as OPENING_HOURS_PROPS].from
    const CLOSE_HOUR = OPENING_HOURS[timeOfDay as OPENING_HOURS_PROPS].to

    const filteredResults = filterUnits({
      open_hour: OPEN_HOUR,
      close_hour: CLOSE_HOUR,
      results: [...results.locations],
      showOfClosedUnits: showOfClosedUnits,
    })
    setFilteredResults(filteredResults)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="border-4">
        <CardHeader>
          <CardTitle>Horário</CardTitle>
          <CardDescription>Qual período quer treinar?</CardDescription>
          <Separator orientation="horizontal" />
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <FormField
            control={control}
            name="timeOfDay"
            render={({ field }) => (
              <RadioGroup
                className="gap-4"
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="morning"
                      id="morning"
                      required
                      checked={field.value === 'morning'}
                    />
                    <Label htmlFor="morning">Manhã</Label>
                  </div>
                  <Label>06:00 às 12:00</Label>
                </div>
                <Separator orientation="horizontal" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="afternoon"
                      id="afternoon"
                      checked={field.value === 'afternoon'}
                    />
                    <Label htmlFor="afternoon">Tarde</Label>
                  </div>
                  <Label>12:01 às 18:00</Label>
                </div>
                <Separator orientation="horizontal" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="night"
                      id="night"
                      checked={field.value === 'night'}
                    />
                    <Label htmlFor="night">Noite</Label>
                  </div>
                  <Label>18:01 às 23:00</Label>
                </div>
                <Separator orientation="horizontal" />
                <p className="text-sm text-red-500">
                  {errors.timeOfDay?.message}
                </p>
              </RadioGroup>
            )}
          />
          <FormField
            control={control}
            name="showOfClosedUnits"
            render={({ field }) => (
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="displayClosedUnits"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor="displayClosedUnits">
                    Exibir unidades fechadas
                  </Label>
                </div>
                <div>
                  <Label>Resultados encontrados:</Label>{' '}
                  <span className="text-base font-bold">
                    {filteredResults?.length || 0}
                  </span>
                </div>
              </div>
            )}
          />
        </CardContent>
        <CardFooter className="mx-auto flex w-full flex-col justify-center gap-4 sm:h-4/5 sm:flex-row lg:w-3/5">
          <Button
            type="submit"
            variant="default"
            className="w-full font-bold uppercase"
            disabled={isLoading}
          >
            ENCONTRAR UNIDADE
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={isLoading}
            onClick={() => reset()}
            className="w-full border-2 font-bold uppercase"
          >
            LIMPAR
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default CardSpecifications
