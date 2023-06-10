import React from "react"

import CategoresProductis from "../../components/products/categorie"

const page = () => {
  return (
    <div>
      <CategoresProductis nameCat="News Arrivals" />
      <CategoresProductis nameCat="The Best For this Month" />
      <CategoresProductis nameCat="Our Selections" />
    </div>
  )
}

export default page
