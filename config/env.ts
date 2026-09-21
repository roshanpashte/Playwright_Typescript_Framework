import dotenv from 'dotenv';

dotenv.config({
  path: '.env.qa',
});

export const ENV = {
  BASE_URL: process.env.BASE_URL || '',
  USERNAME: process.env.APP_USERNAME || '',
  PASSWORD: process.env.APP_PASSWORD || '',
};