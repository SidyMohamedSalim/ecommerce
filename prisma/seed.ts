import { fa, faker } from "@faker-js/faker"
import { PrismaClient, category, product, user } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  // loop for 10 times
  const usersPromises = []
  for (let i = 0; i < 10; i++) {
    const user: user = {
      name: faker.person.firstName(),
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

  const categoryPromises = []

  for (let i = 0; i < 10; i++) {
    const category: category = {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
      createdAt: faker.date.anytime(),
      updatedAt: faker.date.recent(),
    }

    categoryPromises.push(
      prisma.category.create({
        data: category,
      })
    )
  }

  const categories = await Promise.all(categoryPromises)

  // loop for 100 times
  const productsPromises = []

  for (let i = 0; i < 50; i++) {
    const randomInt = faker.number.int({ max: categories.length - 1, min: 0 })

    const categoryId = categories[randomInt].id

    const product: product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      image: faker.image.url(),
      catetorieId: categoryId,
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
