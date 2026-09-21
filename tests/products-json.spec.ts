import { test, expect } from '@playwright/test';
import { ProductsJsonPage } from '../pages/ProductsJsonPage';

import checkoutData from '../test-data/checkoutData.json';

test('E2E - JSON test data - Add product and checkout', async ({ page }) => {

  const productsPage = new ProductsJsonPage(page);

  // Navigate to Products page
  await productsPage.navigate();

  // Verify Products page
  await productsPage.verifyProductsPage();

  // Add product to cart
  await productsPage.addBackpackToCart();

  // Go to Cart
  await productsPage.goToCart();

  // Verify product in cart
  await productsPage.verifyBackpackInCart();

  // Proceed to Checkout
  await productsPage.proceedToCheckout();

  // Verify Checkout page
  await productsPage.verifyCheckoutPage();

  // Enter JSON test data
  await productsPage.enterCheckoutInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode
  );

  // Verify entered data
  await expect(productsPage.firstNameInput)
    .toHaveValue(checkoutData.firstName);

  await expect(productsPage.lastNameInput)
    .toHaveValue(checkoutData.lastName);

  await expect(productsPage.postalCodeInput)
    .toHaveValue(checkoutData.postalCode);

  // Continue checkout
  await productsPage.continueCheckout();
});