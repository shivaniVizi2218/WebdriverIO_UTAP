const {
  LoginPage,
  ProductsPage,
  CheckoutPage,
  LogoutPage,
} = require("../pages/indexPage");

describe("Swag Labs application test suite", () => {
  it("Login with valid credentials", async () => {
    await LoginPage.Login();
  });
  it("should add a product to cart and remove it", async () => {
    await ProductsPage.addingProductToCart();
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
