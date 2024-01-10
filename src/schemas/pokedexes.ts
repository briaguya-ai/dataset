import z from 'zod'

import { nameSchema, slugSchema } from './common'

export const pokedexItemIndexSchema = z
  .object({
    id: slugSchema,
    name: nameSchema,
    region: slugSchema.nullable(),
    baseDex: slugSchema.nullable(),
    pokeApiId: z.coerce.number().optional(),
  })
  .strict()

export type PokedexIndexItem = z.infer<typeof pokedexItemIndexSchema>

export const pokedexEntrySchema = z.object({
  id: slugSchema,
  dexNum: z.coerce.number().optional(),
  isForm: z.coerce.boolean(),
  // required: z.coerce.boolean().optional(), // true if it's required to complete the dex
  // flavorText: z.string().optional(),
})

export const pokedexSchema = z.object({
  id: slugSchema,
  name: nameSchema,
  region: slugSchema.nullable(),
  generation: z.coerce.number(),
  gameIds: z.array(slugSchema),
  baseDex: slugSchema.nullable(),
  pokeApiId: z.coerce.number().optional(),
  entries: z.array(pokedexEntrySchema),
})

export type Pokedex = z.infer<typeof pokedexSchema>

export type PokedexEntry = z.infer<typeof pokedexEntrySchema>
