import { Page, Locator, expect } from '@playwright/test';

export class ProductsJsonPage {
  readonly page: Page;

  // Products
  readonly pageTitle: Locator;
  readonly addBackpackButton: Locator;

  // Cart
  readonly cartLink: Locator;
  readonly cartItem: Locator;
  readonly checkoutButton: Locator;

  // Checkout
  readonly checkoutPageTitle: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Products
    this.pageTitle = page.locator('.title');

    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    // Cart
    this.cartLink = page.locator('.shopping_cart_link');

    this.cartItem = page.locator(
      '[data-test="inventory-item-name"]'
    );

    this.checkoutButton = page.locator(
      '[data-test="checkout"]'
    );

    // Checkout
    this.checkoutPageTitle = page.locator('.title');

    this.firstNameInput = page.locator(
      '[data-test="firstName"]'
    );

    this.lastNameInput = page.locator(
      '[data-test="lastName"]'
    );

    this.postalCodeInput = page.locator(
      '[data-test="postalCode"]'
    );

    this.continueButton = page.locator(
      '[data-test="continue"]'
    );
  }

  async navigate() {
    await this.page.goto('/inventory.html');
  }

  async verifyProductsPage() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async verifyBackpackInCart() {
    await expect(this.cartItem).toHaveText(
      'Sauce Labs Backpack'
    );
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async verifyCheckoutPage() {
    await expect(this.checkoutPageTitle).toHaveText(
      'Checkout: Your Information'
    );
  }

  async enterCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }
}