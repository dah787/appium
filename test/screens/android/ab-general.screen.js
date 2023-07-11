// const AuthM   = require("../../screens/android/ab-authorization.screen"); // Authorization screen Model
const HomeM   = require('../../screens/android/ab-home.screen');          // Home screen Model
const HProfM  = require('../../screens/android/ab-home-profile.screen');  // Home-Profile screen Model
const GenM    = require('../../screens/android/ab-general.screen');       // General screen Model

class GeneralScreen {

/* CONSTANTS */
appPackage = 'com.fincube.apexbank.debug';
appActivity = 'com.fincube.apexbank.presentation.ui.activity.MainActivity';
waitTime = 5000;



/* SELECTORS : added on 20230704 */
get languageButton_from_20230704() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]');}



/* FUNCTIONS */
async logOutTheApp() { // appLogOut
  // * Закрыть клавиатуру
  if( await driver.isKeyboardShown() ) await driver.hideKeyboard();

  // * Выйти из приложения
  while (
    // !(await $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]').isDisplayed()) &&
    // !(await AuthM.languageButton.isDisplayed()) &&
    !(await this.languageButton_from_20230704.isDisplayed()) &&
    !(await HomeM.homeNavBtn.isDisplayed())
    ) {
    await driver.back();
  }

  if(await HomeM.homeNavBtn.isDisplayed()) {
    await HomeM.homeNavBtn.click();
    await HomeM.profileButton.waitForDisplayed({timeout: GenM.waitTime + 5000});
    await HomeM.profileButton.click();
    await HProfM.appLogOutButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
    await HProfM.appLogOutButton.click();
  }
}



/* EOF class */
}

module.exports = new GeneralScreen();