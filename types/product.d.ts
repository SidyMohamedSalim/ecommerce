export type productType = {
  id: number
  name: string
  price: number
  href: string
  images: {
    src: string
    alt: string
  }[]
  description: string
  highlights?: string[]
  details?: string
}

export type CardproductType = {
  qte: number
} & productType
