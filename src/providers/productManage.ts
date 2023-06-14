import { CardproductType, productType } from "../../types/product"

type ProductProps = {
  product: productType
  cardProducts: CardproductType[]
}

// CONSTANTS
export const TVA = 0.2
export const PROMO = 0.3

export const removeFromCart = ({ product, cardProducts }: ProductProps) => {
  cardProducts.splice(cardProducts.indexOf({ qte: 1, ...product }), 1)
}

const clearCart = ({ cardProduct }: { cardProduct: productType[] }) => {
  cardProduct.splice(0, cardProduct.length)
}

export const totalProduitCardPrix = ({
  cardProducts,
}: {
  cardProducts: CardproductType[]
}) => {
  let total = 0
  cardProducts.forEach((product) => {
    total += Number(product.price) * product.qte
  })
  return Number(total).toFixed(2)
}

export const totalProduitCardPrixTTC = ({
  cardProducts,
}: {
  cardProducts: CardproductType[]
}) => {
  let total = 0
  cardProducts.map((product) => {
    total += Number(product.price) * (1 + TVA) * product.qte
  })
  return Number(total).toFixed(2)
}

export const totalProduitPrice = ({ product }: { product: productType }) => {
  return Number(product.price)
}
