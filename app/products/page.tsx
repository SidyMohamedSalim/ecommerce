import React from "react"

import CategoresProducts from "../../components/products/categorie"
import { prisma } from "../../src/db/prisma"

const page = async () => {
  const category = await prisma.category.findMany()

  return (
    <div>
      {category.map(async (cat) => {
        const product = await prisma.product.findMany({
          where: {
            catetorieId: cat.id,
          },
        })
        return <CategoresProducts category={cat} products={product} />
      })}
    </div>
  )
}

export default page
