
require('dotenv').config()
const webActions=require('../../utils/WebActions')
const waitUtility=require('../../utils/WaitUtility')

const Locators ={
    loginBtn: {
      android: '~test-LOGIN',
      web: '#login-button',
    },

    username: {
        android: '~test-Username',
        web: '#user-name',
      },

    password: {
        android: '~test-Password',
        web: '//*[@placeholder="Password"]',
      },

    productHeader : {
        android: '//android.view.ViewGroup[@content-desc="test-Cart drop zone"]',
        web : '.title'
    }
};

class LoginPage {

  async enterUsername(username) {
    await webActions.setInputValue(Locators.username,username)
  }

  async enterPassword(password) {
    await webActions.setInputValue(Locators.password,password)
  }

  async Login() {
     await this.enterUsername(process.env.SwagLabs_username);
     await waitUtility.wait(3);
     await this.enterPassword(process.env.SwagLabs_password);
     await webActions.clickElement(Locators.loginBtn);
     await webActions.isElementDisplayed(Locators.productHeader);
  }

};
module.exports = new LoginPage();