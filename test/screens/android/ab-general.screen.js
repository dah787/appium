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
let itCounter = 0;
  while (
    // !(await $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]').isDisplayed()) &&
    // !(await AuthM.languageButton.isDisplayed()) &&
    !(await this.languageButton_from_20230704.isDisplayed()) &&
    !(await HomeM.homeNavBtn.isDisplayed())
    ) {
await driver.saveScreenshot('view_shots/logOutTheApp_0_afterCycle_' + (itCounter + 1) + '.png');
    await driver.back();
  }

  if(await HomeM.homeNavBtn.isDisplayed()) {
await driver.saveScreenshot('view_shots/logOutTheApp_1_beforeClick_' + 'homeNavBtn' + '.png');
    await HomeM.homeNavBtn.click();
    await HomeM.profileLayout.waitForDisplayed({timeout: GenM.waitTime + 5000});
await driver.saveScreenshot('view_shots/logOutTheApp_2_afterClick_' + 'homeNavBtn' + '.png');
//     await HomeM.profileLayout.click(); // profileButton
//     await HProfM.appLogOutButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
// await driver.saveScreenshot('view_shots/logOutTheApp_3_afterClick_' + 'profileButton' + '.png');
//     await HProfM.appLogOutButton.click();
// await driver.saveScreenshot('view_shots/logOutTheApp_4_afterClick_' + 'appLogOutButton' + '.png');
  }

  await HomeM.profileName_NadiaPage.click(); // profileButton // profileLayout
  await HProfM.appLogOutButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
await driver.saveScreenshot('view_shots/logOutTheApp_3_afterClick_' + 'profileButton' + '.png');
  await HProfM.appLogOutButton.click();
await driver.saveScreenshot('view_shots/logOutTheApp_4_afterClick_' + 'appLogOutButton' + '.png');
}



/* EOF class */
}

module.exports = new GeneralScreen();