import { get } from "http"
import { main } from "@/src/data/products"
import { product } from "@prisma/client"

import { apiHandler } from "../../../src/db/handler"
import { prisma } from "../../../src/db/prisma"

export default apiHandler({
  endpoints: {
    GET: async (req, res) => {
      const products = await prisma.product.findMany()
      res.status(200).json({ products })
    },
  },
})
