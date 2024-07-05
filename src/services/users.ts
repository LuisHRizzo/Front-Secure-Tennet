/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker'
import { RANDOMIZE } from '~/app/constants.ts'
import usersStaticJSON from '~/data/users.json'
import type { Users } from '~/types/entities.ts'

const usersStaticData: Users = usersStaticJSON

export function getUsers(randomize = RANDOMIZE) {
  console.log('getUsers')

  const result = randomize
    ? usersStaticData.map((p) => {
        p.name = faker.person.fullName()
        p.email = faker.internet.email()
        p.position = faker.person.jobTitle()
        p.country = faker.location.country()
        return p
      })
    : usersStaticData

  return result
}
