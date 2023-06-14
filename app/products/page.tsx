import React from "react"
import { client } from "@/src/db/client/client"
import { useQuery } from "@tanstack/react-query"

import CategoresProductis from "../../components/products/categorie"
import { getAllProducts } from "../../src/data/products"
import { prisma } from "../../src/db/prisma"
// import { useProducts } from "../../src/data/hooks"
import { productsScheme } from "../../src/scheme"

const page = async () => {
  const data = await prisma.product.findMany()

  return (
    <div>
      <CategoresProductis products={data} nameCat="News Arrivals" />
    </div>
  )
}

export default page
