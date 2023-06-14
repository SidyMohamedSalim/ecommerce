import React from "react"

import Product from "../../../components/products/product"
import { getProductById } from "../../../src/data/products"
import { prisma } from "../../../src/db/prisma"
import { productType } from "../../../types/product"

const page = async ({ params }: { params: { productId: string } }) => {
  const product = await prisma.product.findUnique({
    where: {
      id: params.productId,
    },
  })
  if (product === null) {
    return {
      notFound: true,
    }
  }
  return (
    <div>
      <Product products={product} />
    </div>
  )
}

export default page
