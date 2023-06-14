import { z } from "zod"

export const productsScheme = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.string(),
    image: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
)
