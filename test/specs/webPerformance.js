import { browser } from 'k6/browser';
import {check,sleep} from 'k6';
 
export const options = {
    scenarios: {
        browser_test: {
            executor: 'shared-iterations',
            vus: 10,
            iterations:10, 
            maxDuration: '1m',
            options: {
                browser: {
                    type: 'chromium'
                }
            }
        }
    }
}
export default async function() {
    const page = await browser.newPage(); 
    await page.goto('https://www.saucedemo.com/');
    page.locator('#user-name').type('standard_user')
    page.locator('//*[@placeholder="Password"]').type('secret_sauce')
    page.locator('#login-button').click();
    console.log("application login successfully")
    sleep(5)
    await page.close();
}

