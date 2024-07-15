import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: "contact@billal.me",
  //     name: "Billal Benzazoua",
  //   }
  // });
  /**
   * generate fake data todo list for Todo model
   * */

  // await prisma.todo.createMany({
  //   data: Array.from({ length: 5 }).map(() => ({
  //     title: faker.lorem.words(2),
  //     body: faker.lorem.sentence(10),
  //     userId: "6694fbe2fee7292a537b6450",
  //   })),
  // });

  // await prisma.todo.delete({
  //   where: {
  //     id: "6694fcdd27a7c0353586e896",
  //   },
  // });

  // await prisma.todo.update({
  //   where: {
  //     id: "6694fedba8f5f1d191a81e54",
  //   },
  //   data: {
  //     title: "Updated title",
  //     body: "Updated body",
  //     completed: true,
  //   }
  // });

  // await prisma.user
  //   .findUnique({
  //     where: {
  //       id: "6694fbe2fee7292a537b6450",
  //     },
  //     include: {
  //       todos: true,
  //     },
  //   })
  //   .then((user) => {
  //     console.log(user);
  //   });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
