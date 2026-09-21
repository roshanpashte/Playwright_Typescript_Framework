import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { getCheckoutData } from '../test-data/checkoutData';
import { generateAWB } from '../test-data/awbData';

test('E2E - Faker data with AWB', async ({ page }) => {

  const productsPage = new ProductsPage(page);

  // Generate test data once
  const checkoutData = getCheckoutData();
  const awbData = generateAWB();

  console.log('Generated AWB:', awbData.awbNumber);

  // Products
  await productsPage.navigate();

  await productsPage.verifyProductsPage();

  // Add product
  await productsPage.addBackpackToCart();

  // Cart
  await productsPage.goToCart();

  await productsPage.verifyBackpackInCart();

  // Checkout
  await productsPage.proceedToCheckout();

  await productsPage.verifyCheckoutPage();

  // Checkout information
  await productsPage.enterCheckoutInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    awbData.awbNumber
  );

  // Verify values
  await expect(productsPage.firstNameInput)
    .toHaveValue(checkoutData.firstName);

  await expect(productsPage.lastNameInput)
    .toHaveValue(checkoutData.lastName);

  await expect(productsPage.postalCodeInput)
    .toHaveValue(awbData.awbNumber);

  await productsPage.continueCheckout();
});