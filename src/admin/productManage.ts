import { CardproductType, productType } from "../../types/product"

type ProductProps = {
  product: productType
  cardProducts: CardproductType[]
}

export const removeFromCart = ({ product, cardProducts }: ProductProps) => {
  cardProducts.splice(cardProducts.indexOf({ qte: 1, ...product }), 1)
}

const clearCart = ({ cardProduct }: { cardProduct: productType[] }) => {
  cardProduct.splice(0, cardProduct.length)
}

export const totalProduitCardPrix = ({
  cardProducts,
}: {
  cardProducts: productType[]
}) => {
  let total = 0
  cardProducts.forEach((product) => {
    total += Number(product.price)
  })
  return total
}

export const totalProduitCardPrixTTC = ({
  cardProducts,
}: {
  cardProducts: CardproductType[]
}) => {
  let total = 0
  cardProducts.map((product) => {
    total += Number(product.price)
  })
  return total
}

export const totalProduitPrice = ({ product }: { product: productType }) => {
  return Number(product.price)
}
