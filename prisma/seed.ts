import { fa, faker } from "@faker-js/faker"
import { PrismaClient, product, user } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  // loop for 10 times
  const usersPromises = []
  for (let i = 0; i < 10; i++) {
    const user: user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
    usersPromises.push(
      prisma.user.create({
        data: user,
      })
    )
  }

  const users = await Promise.all(usersPromises)

  // loop for 100 times
  const productsPromises = []

  for (let i = 0; i < 50; i++) {
    const product: product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      image: faker.image.url(),
    }
    productsPromises.push(
      prisma.product.create({
        data: product,
      })
    )
  }

  await Promise.all(productsPromises)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
