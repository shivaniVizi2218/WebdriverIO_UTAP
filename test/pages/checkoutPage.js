
const webActions = require('../../utils/WebActions')
const { faker } = require('@faker-js/faker');
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const pincode = faker.location.zipCode();
const Locators = {
    continueShoppingBtn: {
        android: '~test-CONTINUE SHOPPING',
        web: '#continue-shopping'
    },
    checkoutBtn: {
        android: '~test-CHECKOUT',
        web: '#checkout'
    },
    firstname_inputFileld: {
        android: '~test-First Name',
        web: '#first-name'
    },
    lastname_inputField: {
        android: '~test-Last Name',
        web: '#last-name'
    },
    zipCode_inputField: {
        web: '#postal-code',
        android: '~test-Zip/Postal Code'
    },
    continueBtn: {
        web: "#continue",
        android: '~test-CONTINUE'
    },
    finishBtn: {
        web: "#finish",
        android: '~test-FINISH'
    },
    successMessage: {
        web: '//h2',
        android: '//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[1]'
    }
};

class checkoutPage {
    async clickingOnCheckoutBtn() {
        await webActions.clickElement(Locators.checkoutBtn)
    }
    async enteringCheckoutDetails() {
        await webActions.setInputValue(Locators.firstname_inputFileld,firstName )
        await webActions.setInputValue(Locators.lastname_inputField,lastName)
        await webActions.setInputValue(Locators.zipCode_inputField, pincode)
    }
    async clickingOnContinueBtn() {
        await webActions.clickElement(Locators.continueBtn)
    }

    async clickingOnFinishBtn() {

        if (browser.capabilities.automationName === 'UiAutomator2') {
            // Check if the platform is Android
            const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("FINISH"))`;
            const bottomEl = $(`android=${bottomElementSelector}`);
            await bottomEl.click();
        } else {
            await webActions.clickElement(Locators.finishBtn);
        }
        await webActions.isElementDisplayed(Locators.successMessage)
    }

}
module.exports = new checkoutPage()