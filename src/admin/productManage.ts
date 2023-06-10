import { CardproductType, productType } from "../../types/product"

type ProductProps = {
  product: productType
  cardProducts: CardproductType[]
}

export const addToCart = ({ product, cardProducts }: ProductProps) => {
  if (cardProducts.find((item) => item.id === product.id)) {
    const item = cardProducts.find((item) => item.id === product.id)
    if (item) {
      item.qte += 1
      console.log(item.qte)
    }

    return
  }
  cardProducts.push({
    qte: 1,
    ...product,
  })
}

export const removeFromCart = ({ product, cardProducts }: ProductProps) => {
  cardProducts.splice(cardProducts.indexOf({ qte: 1, ...product }), 1)
}

const clearCart = ({ cardProduct }: { cardProduct: productType[] }) => {
  cardProduct.splice(0, cardProduct.length)
}

export const countProduitCard = ({ product, cardProducts }: ProductProps) => {
  return cardProducts.length
}

export const totalProduitCardPrix = ({
  cardProducts,
}: {
  cardProducts: productType[]
}) => {
  let total = 0
  cardProducts.forEach((product) => {
    total += parseInt(product.price)
  })
  return total
}

export const totalProduitCardPrixTTC = ({
  cardProducts,
}: {
  cardProducts: productType[]
}) => {
  let total = 0
  cardProducts.forEach((product) => {
    total += parseInt(product.price)
  })
  return total + (total * 20) / 100
}

export const totalProduitPrice = ({ product }: { product: productType }) => {
  return parseInt(product.price)
}
