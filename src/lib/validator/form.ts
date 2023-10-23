import z from 'zod'

export const formValidator = z.object({
  showOfClosedUnits: z.boolean().optional(),
  timeOfDay: z.string().refine((val) => val.length > 1, {
    message: 'Escolha uma opção acima.',
  }),
})

export type formRequest = z.infer<typeof formValidator>
