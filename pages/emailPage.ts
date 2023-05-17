import { Locator, Page } from '@playwright/test'

const url = 'http://email'

export class EmailPage {
  readonly page: Page
  readonly activateAccountLink: Locator

  constructor(page: Page) {
    this.page = page
    this.activateAccountLink = this.page.locator("//img[contains(@alt, 'Verify Now')]")
  }

  async renderContent(content: string) {
    await this.page.route(url, route => {
      route.fulfill({ body: content })
    })
    await this.page.goto(url)
  }

  async successfullyVerifiedEmail() {
    await this.page.isVisible("//h1[text()='Your email has been verified!']")
  }

  async clickVerifyEmailLink() {
    await this.activateAccountLink.click()
    await this.page.waitForLoadState()
  }
}