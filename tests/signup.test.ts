import { expect, test } from "@playwright/test";
import { getLatestEmail } from "../helper/emailApi";
import { EmailPage } from "../pages/emailPage";
import { randomText } from "../helper/helpers";
import LoginPage from "../pages/loginPage";


test.only("Sign up user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const emailPage = new EmailPage(page);
  const userName = randomText()

  const userEmail = `${userName}@mail7.io`;
  const password = "Sifra123**";

  await page.goto("https://www.codecademy.com/");

  await loginPage.enterEmail({ email: userEmail });
  await loginPage.enterPassword({ password });
  await loginPage.signupButtonClick();

  const email = await getLatestEmail(userEmail);
  await emailPage.renderContent(email.html);
  await emailPage.clickVerifyEmailLink();

  expect(emailPage.successfullyVerifiedEmail());
});
