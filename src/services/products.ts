/* eslint-disable no-param-reassign */
import productsStaticJSON from '../../data/products.json'
import { RANDOMIZE } from '../app/constants.ts'
import type { Products } from '../types/entities.ts'
import { faker } from '@faker-js/faker'

const productsStaticData: Products = productsStaticJSON

export function getProducts(randomize = RANDOMIZE) {
  console.log('getProducts')

  const result = randomize
    ? productsStaticData.map((p) => {
        p.price = faker.commerce.price()
        p.technology = faker.commerce.productName()
        p.description = faker.commerce.productDescription()
        return p
      })
    : productsStaticData

  return result
}
