
const webActions = require('../../utils/WebActions')
const Locators = {
    menuIcon: {
        web: "//button[text()='Open Menu']",
        android: '//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView'
    },
    logout_Label: {
        web: "#logout_sidebar_link",
        android: '~test-LOGOUT'
    }
};

class logoutPage {

    async logout() {
        await webActions.clickElement(Locators.menuIcon)
        await webActions.clickElement(Locators.logout_Label)
    }
}
module.exports = new logoutPage()