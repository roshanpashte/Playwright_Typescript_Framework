import { faker } from '@faker-js/faker';

export interface CheckoutData {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export function getCheckoutData(): CheckoutData {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postalCode: faker.string.numeric(5),
  };
}