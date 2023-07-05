const GenM  = require('../../screens/android/ab-general.screen'); // General screen Model

class InitialScreen {

/* CONSTANTS */
welcomeScreenHeaderEn_Expected = 'Welcome';
welcomeScreenHeaderRu_Expected = 'Добро пожаловать';
// welcomeScreenHeaderRu_Expected = 'Войти в ApexBank';
welcomeScreenHeaderUz_Expected = 'Xush kelibsiz';

countryCode_Expected = '+998';

appLanguage_En = 'english'; // 'En'
appLanguage_Ru = 'russian'; // 'Ru'
appLanguage_Uz = 'uzbek';   // 'Uz'

supportMenuHeaderEn_Expected = 'Support contact';
supportMenuHeaderRu_Expected = 'Контакт со службой поддержки';
supportMenuHeaderUz_Expected = 'Qo‘llab-quvvatlash aloqa';
supportPhoneNum_Expected = '+998 91 394 11 13';
supportTelegramName_Expected = 'Jaksibay Khakimov';



/* SELECTORS */
waitForScreenDisplayed() { // wait_for_screen_displayed() {
  this.supportButton_1.waitForDisplayed({timeout: GenM.waitTime})
  this.languageButton.waitForDisplayed({timeout: GenM.waitTime})
  this.phoneNumInputField.waitForDisplayed({timeout: GenM.waitTime})
}

get supportButton_1() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/supportButton"]')}
get supportMenuHeader() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get supportMenuItemCall() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/container_call"]');}
get supportMenuItemTelegram() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/container_telegram"]');}

get languageButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]')}
get languageMenuHeader() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get languageMenuItemEn() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_english"]');}
get languageMenuItemRu() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_russian"]');}
get languageMenuItemUz() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_uzbek"]');}
get languageMenuItems() {
  return $$('android.widget.TextView');}

get welcomeScreenHeaderEn() { // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="Welcome"]');}
get welcomeScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Добро пожаловать"]');}
  // return $('//android.widget.TextView[@text="Войти в ApexBank"]');}
get welcomeScreenHeaderUz() {
  return $('//android.widget.TextView[@text="Xush kelibsiz"]');}

get enterYourMobNumTextEn() { // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="Enter your mobile number"]');}

get countryCodeField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/country_code"]');}
get phoneNumInputField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input_phone"]')}



/* FUNCTIONS : e2e */
async selectLanguage(language) { // appLanguageChoose
  // /*отладка*/ console.log('\n --> language = ' + language + '\n);
  // // * Нажать кнопку выбора языка интерфейса.
  // await this.languageButton.click();
  // // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
  // // - окно
  // await expect(this.languageMenuHeader).toBeDisplayed();
  // // - элементы выбора языков
  // await expect(this.languageMenuItemEn).toBeDisplayed();
  // await expect(this.languageMenuItemRu).toBeDisplayed();
  // await expect(this.languageMenuItemUz).toBeDisplayed();
  // // *- 2.Отображается галочка на элементе текущего выбора языка.
  // // ?

  // * Нажать элемент выбора языка.
  switch (language) {
    case this.appLanguage_En:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.welcomeScreenHeaderEn.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.languageButton.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.languageMenuHeader).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, английский).
        await this.languageMenuItemEn.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Welcome для английского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.languageMenuHeader).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.welcomeScreenHeaderEn).toHaveText(this.welcomeScreenHeaderEn_Expected);
        // - кнопка выбора языка интерфейса
        await expect(this.languageButton).toBeExisting();
        // await expect(this.languageButton).toBeEnabled();
        // await expect(this.languageButton).toBeDisplayed();
        // + код страны
        await expect(this.countryCodeField).toHaveText(this.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.phoneNumInputField).toBeDisplayed();
      }
      break;
    
    case this.appLanguage_Ru:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.welcomeScreenHeaderRu.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.languageButton.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.languageMenuHeader).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, русский).
        await this.languageMenuItemRu.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Добро пожаловать для русского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.languageMenuHeader).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.welcomeScreenHeaderRu).toHaveText(this.welcomeScreenHeaderRu_Expected);
        // - кнопка выбора языка интерфейса
        // await expect(this.languageButton).toBeExisting();
        await expect(this.languageButton).toBeEnabled();
        // await expect(this.languageButton).toBeDisplayed();
        // + код страны
        await expect(this.countryCodeField).toHaveText(this.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.phoneNumInputField).toBeDisplayed();
      }
      break;
  
    case this.appLanguage_Uz:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.welcomeScreenHeaderUz.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.languageButton.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.languageMenuHeader).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, узбекский).
        await this.languageMenuItemUz.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Xush kelibsiz для узбекского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.languageMenuHeader).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.welcomeScreenHeaderUz).toHaveText(this.welcomeScreenHeaderUz_Expected);
        // - кнопка выбора языка интерфейса
        // await expect(this.languageButton).toBeExisting();
        // await expect(this.languageButton).toBeEnabled();
        await expect(this.languageButton).toBeDisplayed();
        // + код страны
        await expect(this.countryCodeField).toHaveText(this.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.phoneNumInputField).toBeDisplayed();
      }
      break;
    
    default:
      console.log('\n --> в languageMenuItem.. нет элемента: ' + language + '\n');
      break;
  }
}
  


/* FUNCTIONS : elements */
async generateLanguagesListInArray(raw_array, data_array, data_array_elems, elementAttributeKey,
  appLanguage_1, appLanguage_2, appLanguage_3, appLanguage_4) { // appLanguagesList(raw_array, ...)
  let elementIndex = 0;
  let elementAttributeText = '';
  for (const element of raw_array) {
    elementAttributeText = await element.getAttribute(elementAttributeKey);
    if(
      await elementAttributeText.endsWith(appLanguage_1) ||
      await elementAttributeText.endsWith(appLanguage_2) ||
      await elementAttributeText.endsWith(appLanguage_3) ||
      await elementAttributeText.endsWith(appLanguage_4)
      // await elementAttributeText.includes(appLanguage_4)
    ){
      elementIndex = elementAttributeText.indexOf('_');
      elementAttributeText = elementAttributeText.slice(elementIndex + 1)
      // /*отладка*/ console.log('\n --> elementAttributeText = ' + elementAttributeText + '\n');
      data_array.push(elementAttributeText);
      data_array_elems.push(element);
    }
  }
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + '\n');
  // /*отладка*/ console.log('\n --> data_array_elems[1] = ' + await data_array_elems[1].getAttribute(elementAttributeKey) + '\n');
}



/* EOF class */
}

module.exports = InitialScreen;