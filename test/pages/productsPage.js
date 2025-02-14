
const webActions = require('../../utils/WebActions')
const waitUtility = require('../../utils/WaitUtility')
const Locators = {
  productSortContainer: {
    android: '//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView',
    web: '.product_sort_container'
  },

  priceLowToHigh: {
    android: '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[4]',
    web: "//option[@value='lohi']"
  },

  addToCartBtn: {
    android: '(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]',
    web: "(//button[contains(text(), 'Add to cart')])[1]"
  },

  shoppingCartLink: {
    android: '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView',
    web: '.shopping_cart_link'
  },
  removeBtn: {
    android: '~test-REMOVE',
    web: '(//button)[3]'
  },
  continueShoppingBtn: {
    android: '//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]/android.widget.TextView',
    web: '#continue-shopping'
  }
};

class productsPage {
  async addingProductToCart() {
    await webActions.clickElement(Locators.productSortContainer)
    await waitUtility.wait(4)
    await webActions.clickElement(Locators.priceLowToHigh)
    await webActions.clickElement(Locators.addToCartBtn)
    await webActions.clickElement(Locators.shoppingCartLink)
    await webActions.isElementDisplayed(Locators.continueShoppingBtn)
  }
  async clickingOnRemoveBtn() {
    await webActions.clickElement(Locators.removeBtn)
  }
  async clickingOnContinueShoppingBtn() {
    await webActions.clickElement(Locators.continueShoppingBtn)
  }
  async addingProductsToCart() {
    await this.addingProductToCart();
    await this.clickingOnRemoveBtn();
    await this.clickingOnContinueShoppingBtn();
    await this.addingProductToCart();
  }
}
module.exports = new productsPage()