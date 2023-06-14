import { client } from "@/src/db/client/client"
import { PrismaClient, product, user } from "@prisma/client"

import { prisma } from "../db/prisma"

export async function main() {
  return await {
    createUser,
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

const createUser = async (data: user) => {
  return await prisma.user.create({
    data,
  })
}
export const createProduct = async (data: product) => {
  return await prisma.product.create({
    data,
  })
}

export const getAllProducts = async () => {
  return await prisma.product.findMany()
}

export const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: {
      id,
    },
  })
}

export const updateProduct = async (id: string, data: product) => {
  return await prisma.product.update({
    where: {
      id,
    },
    data,
  })
}

export const deleteProduct = async (id: string) => {
  return await prisma.product.delete({
    where: {
      id,
    },
  })
}
