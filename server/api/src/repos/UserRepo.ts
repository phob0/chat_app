import { getRandomInt } from '@src/util/misc';
import { PrismaClient, User } from '@prisma/client'
import orm from './MockOrm';


// **** Functions **** //
const prisma = new PrismaClient()
/**
 * Get one user.
 */

/**
 * See if a user with the given id exists.
 */


/**
 * Get all users.
 */
async function getAll(): Promise<User[]> {
  return await prisma.user.findMany({include: { rooms: true }})
}

/**
 * Add one user.
 */


/**
 * Update a user.
 */


/**
 * Delete one user.
 */


// **** Export default **** //

export default {
  // getOne,
  // persists,
  getAll,
  // add,
  // update,
  // delete: delete_,
} as const;
