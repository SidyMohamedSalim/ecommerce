import React from "react"

import Product from "@/components/products/product"

import { products } from "../../../src/data/products"
import { productType } from "../../../types/product"

const page = ({ params }: { params: { productId: string } }) => {
  const product: productType = products[Number(params.productId) - 1]

  return <Product product={product} />
}

export default page
