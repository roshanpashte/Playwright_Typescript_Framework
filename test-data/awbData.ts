import { faker } from '@faker-js/faker';

export interface AWBData {
  airlinePrefix: string;
  serialNumber: string;
  awbNumber: string;
}

// Airlines supported by the application
const airlinePrefixes = [
  '125',
  '176',
];

export function generateAWB(): AWBData {

  // Select one supported airline prefix
  const airlinePrefix = faker.helpers.arrayElement(
    airlinePrefixes
  );

  // Generate remaining 8 digits
  const serialNumber = faker.string.numeric(8);

  // Create 11-digit AWB
  const awbNumber = airlinePrefix + serialNumber;

  return {
    airlinePrefix,
    serialNumber,
    awbNumber
  };
}