import React from "react"
import { products } from "@/src/data/products"

import CategoresProductis from "../../components/products/categorie"

const page = () => {
  return (
    <div>
      <CategoresProductis products={products} nameCat="News Arrivals" />
      <CategoresProductis
        products={products}
        nameCat="The Best For this Month"
      />
      <CategoresProductis products={products} nameCat="Our Selections" />
    </div>
  )
}

export default page
