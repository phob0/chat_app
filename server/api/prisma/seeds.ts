import { PrismaClient } from '@prisma/client'
// import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // const user = await prisma.user.update({
  //   data: [
  //     {
  //       name: 'Alice',
  //       email: 'alice@prisma.io'
  //     },
  //     {
  //       name: 'Tom',
  //       email: 'tom@prisma.io'
  //     }
  //   ]
  // })
  // const room = await prisma.room.create({
  //   data: {
  //     type: 'room'
      // users: {
      //   connect: [
      //     {
      //       id: '640a2d7d7f569cda318977d8'
      //     }
      //   ],
      // }
  //   },
  // })
  // console.log(room)
  // const user = await prisma.user.update({
  //   where: { id: '640bac86ad3d07d36264bc6c' },
  //   data: {
  //     rooms: {
  //       connect: [{ id: '640bb783d774913025865e2c' }]
  //     }
  //   }
  // })
  const q = await prisma.user.findMany()
  console.log(q)
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