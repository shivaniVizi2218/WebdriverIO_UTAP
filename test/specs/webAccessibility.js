const {
  LoginPage,
  ProductsPage,
  CheckoutPage,
  LogoutPage,
} = require("../pages/indexPage");
const { runAccessibility } = require("../../utils/accessibility");
const { isWebPlatform } = require("../../utils/customCommands");

describe("Swag Labs application test suite", () => {
  it("Login with valid credentials", async () => {
    if (isWebPlatform()) {
      await runAccessibility(browser);
    } else {
      console.log("Skipping accessibility test as the platform is not web.");
    }

    await LoginPage.Login();
    if (isWebPlatform()) {
      await runAccessibility(browser);
    }
  });
  it("should add a product to cart and remove it", async () => {
    await ProductsPage.addingProductToCart();
    if (isWebPlatform()) {
      await runAccessibility(browser);
    }
    await ProductsPage.clickingOnRemoveBtn();
  });

  it("should add a product to cart after continuing shopping", async () => {
    await ProductsPage.clickingOnContinueShoppingBtn();
    await ProductsPage.addingProductToCart();
  });

  it("should checkout the product", async () => {
    await CheckoutPage.clickingOnCheckoutBtn();
    await CheckoutPage.enteringCheckoutDetails();
    await CheckoutPage.clickingOnContinueBtn();
    await CheckoutPage.clickingOnFinishBtn();
  });
  it("Logout from application", async () => {
    await LogoutPage.logout();
  });
});
