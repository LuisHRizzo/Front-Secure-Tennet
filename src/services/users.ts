/* eslint-disable no-param-reassign */
import usersStaticJSON from '../../data/users.json'
import { RANDOMIZE } from '../app/constants.ts'
import type { Users } from '../types/entities.ts'
import { faker } from '@faker-js/faker'

const usersStaticData: Users = usersStaticJSON

export function getUsers(randomize = RANDOMIZE) {
  console.log('getUsers')

  const result = randomize
    ? usersStaticData.map((p) => {
        p.name = faker.name.fullName()
        p.email = faker.internet.email()
        p.position = faker.name.jobTitle()
        p.country = faker.address.country()
        return p
      })
    : usersStaticData

  return result
}
