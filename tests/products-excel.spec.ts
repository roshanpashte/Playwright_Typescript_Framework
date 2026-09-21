import { test, expect } from '@playwright/test';
import { ProductsExcelPage } from '../pages/ProductsExcelPage';
import { getCheckoutDataFromExcel } from '../test-data/excelData';

test('E2E - Excel test data - Add product and checkout', async ({ page }) => {

  const productsPage = new ProductsExcelPage(page);

  // Get test data from Excel
  const checkoutData = getCheckoutDataFromExcel();

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

  // Enter Excel data
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

  // Continue
  await productsPage.continueCheckout();
});