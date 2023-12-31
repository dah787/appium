const AuthM   = require("../../screens/android/ab-authorization.screen"); // Authorization screen Model
const CardsD  = require('../../data/ab-cards.data');                      // Cards Data
const DDialM  = require("../../screens/android/dt-androidDialer.screen"); // Android Dialer screen Model
const DTlgM   = require("../../screens/android/dt-appTelegram.screen");   // App Telegram screen Model
const DSysM   = require("../../utils/android/dt-android.utils");          // Android Device Utilities Model
const HomeM   = require('../../screens/android/ab-home.screen');          // Home screen Model
const HProfM  = require('../../screens/android/ab-home-profile.screen');  // Home-Profile screen Model
const GenM    = require('../../screens/android/ab-general.screen');       // General screen Model
/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */

describe('ab-u-ts-1001p: Тестирование элементов (дымовое) |вер.20230621| > Тестов 3 (выполнены частично 1) <', () => {

  let itCounter = 0;
  beforeEach(async () => {
    // * Снимок экрана для контроля
    await driver.saveScreenshot('view_shots/app-screen-1001p_before1st.png');
    
    // /*отладка*/ console.log('\n --> itCounter = ' + itCounter + '\n');
    // * Не выполнять этот код для первого теста
    if (itCounter == 0) return;
  
    // * Открыть начальную страницу приложения
    await driver.startActivity(GenM.appPackage, GenM.appActivity);
  });
  afterEach(async () => {    
    // * Снимок экрана для контроля
    // await driver.saveScreenshot('app-screen_afterEach.png');
    await driver.saveScreenshot('view_shots/app-screen-1001p_afterEach_' + (itCounter + 1) + '.png');

    // * Вести счет числу выполненных тестов
    itCounter++;
    
    // * Выйти из приложения
    await GenM.logOutTheApp();
  });
  after(async () => {
    // * Закрыть приложение
    // await driver.closeApp(); // ошибок нет, но не закрывает
    // await driver.closeApp(GenM.appPackage); // Wrong parameters applied for closeApp
    // await driver.close_app(); // TypeError: driver.close_app is not a function
    await driver.terminateApp(GenM.appPackage);
    // https://appium.io/docs/en/2.0/guides/execute-methods/
    // await driver.executeScript('mobile: terminateApp', [{bundleId: GenM.appPackage}]); // Unknown mobile command "terminateApp".
    // await driver.executeScript('mobile: terminateApp', [{appId: GenM.appPackage}]); // Unknown mobile command "terminateApp".
  });

it.only('ab-u-tc-1001p: Выбор языка интерфейса', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
 * - 2 Стр. выбор языка, выбор языка (Русский) (ш?: П.1)
 * - ? ... <
  > Можно выбрать язык интерфейса <
ПРЕДУСЛОВИЯ: Нет.
  *
ШАГИ:
  1.Запустить приложение Apex-bank.
  1.1.Открыт экран приветствия приложения (на языке текущего выбора языка), где доступна кнопка выбора языка интерфейса.
  
  2.Нажать кнопку выбора языка интерфейса.
  2.1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
  2.2.Отображается галочка на элементе текущего выбора языка.

  3.Нажать элемент выбора языка (например, русский).
  3.1.Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Добро пожаловать для русского языка), где доступна кнопка выбора языка интерфейса.

  4.Выполнить шаги 2-3 для каждого доступного языка.
  *
  */

// > Вывести информацию о тесте в консоль
const tcNum = 'ab-u-tc-1001p';
/*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');
// /*отладка*/ console.log('\n --> Package = ' + await driver.getCurrentPackage() + '\n');
// /*отладка*/ console.log('\n --> Activity = ' + await driver.getCurrentActivity() + '\n');
// /*отладка*/ console.log('\n --> this.test.title = ' + this.test.title + '\n'); // wrong

  // 1.Запустить приложение Apex-bank.
  // ...автоматически.
  // 1.1.Открыт экран приветствия приложения (на языке текущего выбора языка), где доступна кнопка выбора языка интерфейса.
  // - экран приветствия ?-текст разный, т.к. отсутствует resource-id
  // + поле ввода номера телефона.
  await expect(AuthM.phoneNumInputField).toBeDisplayed();
  
  // *.Создать массив существующих языков.
  // *.Открыть окно Выбор языка.
  await AuthM.languageButton.click();

  // await driver.pause(2000);
  await AuthM.languageMenuItemEn.waitForDisplayed({timeout: 5000});
  // const raw_array = await $$('android.widget.TextView');
  const raw_array = await AuthM.languageMenuItems;
  const elementAttributeKey = 'resource-id';
  const data_array = [];
  const data_array_elems = [];
  await AuthM.generateLanguagesListInArray(raw_array, data_array, data_array_elems, elementAttributeKey, AuthM.appLanguage_En, AuthM.appLanguage_Ru, AuthM.appLanguage_Uz, 'Kz');
  
  let elementIndex = 0;
  for (const element of data_array) {
    // /*отладка*/ console.log('\n --> elementIndex ' + elementIndex + '\n');
    // /*отладка*/ console.log('\n --> element ' + element + '\n');
    // 2.Нажать кнопку выбора языка интерфейса.
    if (elementIndex > 0) {
      await AuthM.languageButton.click();
      // 2.1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
      // - окно
      await expect(AuthM.languageMenuHeader).toBeDisplayed();
      // - элементы выбора языков
      for (const element of data_array_elems) {
        await expect(element).toBeDisplayed();
      }
      // 2.2.Отображается галочка на элементе текущего выбора языка.
      // - ?
    }
    elementIndex++;

    switch (element) {
      case AuthM.appLanguage_En:
        // /*отладка*/ console.log('\n --> case En: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, английский).
        await AuthM.languageMenuItemEn.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Welcome для английского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(AuthM.languageMenuHeader).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(AuthM.welcomeScreenHeaderEn).toHaveText(AuthM.welcomeScreenHeaderEn_Expected);
        // - кнопка выбора языка интерфейса
        await expect(AuthM.languageButton).toBeDisplayed();
        // + код страны
        await expect(AuthM.countryCodeField).toHaveText(AuthM.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(AuthM.phoneNumInputField).toBeDisplayed();
        break;
      
      case AuthM.appLanguage_Ru:
        // /*отладка*/ console.log('\n --> case Ru: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, русский).
        await AuthM.languageMenuItemRu.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Добро пожаловать для русского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(AuthM.languageMenuHeader).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(AuthM.welcomeScreenHeaderRu).toHaveText(AuthM.welcomeScreenHeaderRu_Expected);
        // - кнопка выбора языка интерфейса
        await expect(AuthM.languageButton).toBeDisplayed();
        // + код страны
        await expect(AuthM.countryCodeField).toHaveText(AuthM.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(AuthM.phoneNumInputField).toBeDisplayed();
        break;
      
      case AuthM.appLanguage_Uz:
        // /*отладка*/ console.log('\n --> case Uz: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, узбекский).
        await AuthM.languageMenuItemUz.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Xush kelibsiz для узбекского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(AuthM.languageMenuHeader).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(AuthM.welcomeScreenHeaderUz).toHaveText(AuthM.welcomeScreenHeaderUz_Expected);
        // - кнопка выбора языка интерфейса
        await expect(AuthM.languageButton).toBeDisplayed();
        // + код страны
        await expect(AuthM.countryCodeField).toHaveText(AuthM.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(AuthM.phoneNumInputField).toBeDisplayed();
        break;
    
      default:
        console.log('\n --> в languageMenu нет элемента: ' + element + '\n');
        break;
    }
  }
});

it('ab-u-tc-1002p: Контакты со службой поддержки !Тест выполнен частично!', async () => {
  /** > базовые тесты (см. файл ТК 1 (Регистрация)):
   * - 22 Стр. регист, кнопка "Поддержка": Позитив (ш?: 1)
   * - ? ... <
  > Можно осуществить контакты со службой поддержки <
ПРЕДУСЛОВИЯ:
  1.Мессенджер Telegram установлен в тестируемом устройстве, а также выполнен вход в аккаунт пользователя.
  2.Выполнен запуск приложения Apex-bank, языком интерфейса выбран русский, открыт экран приложения Добро пожаловать, где доступна кнопка Поддержка.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов и Telegram (возможна другая комбинация контактов).
  
  2.Нажать элемент средства контактов Вызов.
  2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается номер телефона службы поддержки, а также доступна кнопка совершения телефонного вызова.

  3.Нажать кнопку совершения телефонного вызова.
  3.1.Открыт экран устройства выполнения телефонного вызова, где доступна кнопка завершения вызова.

  4.Выполнить разговор со службой поддержки и/или нажать кнопку завершения вызова.
  4.1.Открыт экран устройства со списком выполненных телефонных звонков, а также доступна кнопка устройства Назад.

  5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

  6.Нажать элемент средства контактов Telegram.
  6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения.

  7.Выполнить переписку со службой поддержки, и/или ввести соответствующий текст в поле ввода сообщения и отправить его.
  7.1.Введенный текст отображается в переписке отправленным, а также доступна кнопка устройства Назад.

  8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

  9.Выполнить шаги 1-8 для каждого доступного средства контакта.

  10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  10.1.Открыт экран приложения Добро пожаловать.
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-u-tc-1002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // П.1.Мессенджер Telegram установлен в тестируемом устройстве, а также выполнен вход в аккаунт пользователя.
  // -?-
  // П.2.Выполнен запуск приложения Apex-bank, языком интерфейса выбран русский, открыт экран приложения Добро пожаловать, где доступна кнопка Поддержка:
  await AuthM.selectLanguage(AuthM.appLanguage_Ru);
  // - кнопка Поддержка
  await expect(AuthM.supportButton_1).toBeDisplayed();

  // 1.Нажать кнопку Поддержка.
  await AuthM.supportButton_1.click();
  // 1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов и Telegram (возможна другая комбинация контактов):
  // - окно
  await expect(AuthM.supportMenuHeader).toBeDisplayed();
  // - элемент выбора средств контактов: Вызов
  await expect(AuthM.supportMenuItemCall).toBeDisplayed();
  // - элемент выбора средств контактов: Telegram
  await expect(AuthM.supportMenuItemTelegram).toBeDisplayed();

  // 2.Нажать элемент средства контактов Вызов.
  await AuthM.supportMenuItemCall.click();
  // 2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается номер телефона службы поддержки, а также доступна кнопка совершения телефонного вызова:
  // - экран устройства для совершения телефонного вызова
  // -?-
  // - кнопка совершения телефонного вызова
  await expect(DDialM.androidDialerCallButton).toBeDisplayed();
  // - номер телефона службы поддержки
  // await expect(DDialM.androidDialerPhoneNumField).toBeDisplayed(); // в этом поле номер не читается, поэтому:
  // -* скрыть клавиатуру, нажав кнопку Назад и сравниваем номера:
  // await driver.back();
  // // /*отладка*/ console.log('\n --> PhoneNumField = ' + await ADialM.androidDialerSearchViewField.getText() + '\n');
  // await expect(DDialM.androidDialerSearchViewField).toHaveText(AuthM.supportPhoneNum_Expected);
  await expect(DDialM.androidDialerPhoneNumField).toHaveText(AuthM.supportPhoneNum_Expected);
  
  // пп.3-4 о совершении телефонного звонка автотестированию не подлежат

  // 5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  // await driver.back();
  // await driver.back();
  // await driver.back();
  await DSysM.androidPressBackButton(3);
  // 5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
  // - окно > + проверяется в п.1
  // - элемент выбора средств контактов: Вызов > + проверяется в п.1
  // - элемент выбора средств контактов: Telegram > waitForDisplayed: v.13 не успевает видеть supportMenu...
  await AuthM.supportMenuItemTelegram.waitForDisplayed({ timeout: 20000 });

  // 6.Нажать элемент средства контактов Telegram.
  await AuthM.supportMenuItemTelegram.click();
  // 6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения:
  // - экран приложения Telegram с перепиской со службой поддержки > waitForDisplayed: v.13 не успевает открыть Telegram (почему-то сначала запускает браузер)
  await DTlgM.supportTelegramName.waitForDisplayed({ timeout: 20000 });
  await expect(DTlgM.supportTelegramName).toHaveText(AuthM.supportTelegramName_Expected);
  // - поле ввода сообщения
  await expect(DTlgM.supportTelegramTextInputField).toBeDisplayed();
  
  // п.7 о совершении переписки автотестированию не подлежит

  // 8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  // await driver.back();
  // await driver.back();
  await DSysM.androidPressBackButton(2);
  // 8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
  // - окно > + проверяется в п.5
  // - элемент выбора средств контактов: Вызов > + проверяется в п.5
  // - элемент выбора средств контактов: Telegram > + проверяется в п.5

  // 9.Выполнить шаги 1-8 для каждого доступного средства контакта.
  // - шаги 1-8 для каждого > проверяется по мере их доступности

  // 10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  // await driver.back();
  await DSysM.androidPressBackButton(1);
  // 10.1.Открыт экран приложения Добро пожаловать.
  // - экран приложения Добро пожаловать
  await expect(AuthM.welcomeScreenHeaderRu).toHaveText(AuthM.welcomeScreenHeaderRu_Expected);
  // - кнопка Поддержка
  await expect(AuthM.supportButton_1).toBeDisplayed();
});

it('ab-u-tc-1003p: Контакты и выбор языка в профиле', async () => {
  /** > базовые тесты (см. файл ...) <
  > В профиле пользователя можно менять языки интерфейса, а также доступны контакты со службой поддержки <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя, при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где доступны кнопка профиля (фото) и имя пользователя.
  *
ШАГИ:
  1.Нажать кнопку профиля (фото) или имя пользователя.
  1.1.Открыт экран профиля пользователя, где доступны кнопка выбора языка, текст названия текущего языка и кнопка контактов со службой поддержки на текущем языке.
  
  2.Нажать кнопку выбора языка.
  2.1.Открыто окно выбора языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
  2.2.Отображается галочка на элементе текущего выбора языка.

  3.Нажать элемент выбора языка (любого).
  3.1.Закрыто окно выбора языка. Открыт экран профиля пользователя на выбранном языке, где доступны кнопка выбора языка, текст названия выбранного языка и кнопка контактов со службой поддержки на выбранном языке.

  4.Нажать кнопку контактов со службой поддержки.
  4.1.Открыто окно контактов со службой поддержки на выбранном языке, где доступны элементы выбора средств контактов: телефонный вызов и Telegram (возможна другая комбинация контактов).

  5.Выполнить шаги 2-4 для каждого доступного языка.
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-u-tc-1003p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNum = CardsD.phoneNum_5_hasCards;
  const phoneNum_pass = CardsD.phoneNum_5_pass;
  // const phoneNum = CardsD.phoneNum_10_hasCards;
  // const phoneNum_pass = CardsD.phoneNum_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);

  // 1.Нажать кнопку профиля (фото) или имя пользователя.
  await HomeM.profileButton.click();
  // 1.1.Открыт экран профиля пользователя, где доступны кнопка выбора языка, текст названия текущего языка и кнопка контактов со службой поддержки на текущем языке.
  
  // 2.Нажать кнопку выбора языка.
  await HProfM.languageButton.click();

  // *.Создать массив существующих языков.
  await HProfM.languageMenuItemEn.waitForDisplayed({timeout: 5000});
  const raw_array = await $$('android.widget.TextView');
  // const raw_array = await HProfM.languageMenuItems;
  const data_array = [];
  const data_array_elems = [];
  const elementAttributeKey = 'resource-id';
  await AuthM.generateLanguagesListInArray(raw_array, data_array, data_array_elems, elementAttributeKey, AuthM.appLanguage_En, AuthM.appLanguage_Ru, AuthM.appLanguage_Uz, 'Kz');

  // 3.Нажать элемент выбора языка (любого).
  let elementIndex = 0;
  for (const element of data_array) {
    // /*отладка*/ console.log('\n --> elementIndex ' + elementIndex + '\n');
    // /*отладка*/ console.log('\n --> element ' + element + '\n');
    
    if (elementIndex > 0) {
      // 2.Нажать кнопку выбора языка.
      await HProfM.languageButton.click();
      // 2.1.Открыто окно выбора языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
      // - окно
      await expect(HProfM.languageMenuHeader).toBeDisplayed();
      // - элементы выбора языков
      for (const element of data_array_elems) {
        await expect(element).toBeDisplayed();
      }
      // 2.2.Отображается галочка на элементе текущего выбора языка.
      // - ?
    }
    elementIndex++;

    switch (element) {
      case AuthM.appLanguage_En:
        // /*отладка*/ console.log('\n --> case En: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, английский).
        await HProfM.languageMenuItemEn.click();
        // 3.1.Закрыто окно выбора языка. Открыт экран профиля пользователя на выбранном языке, где доступны кнопка выбора языка, текст названия выбранного языка и кнопка контактов со службой поддержки на выбранном языке:
        // - окно
        await expect(HProfM.languageMenuHeader).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(HProfM.languageButton).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(HProfM.languageName).toHaveText(HProfM.languageNameEn_Expected);
        // - кнопка контактов со службой поддержки на выбранном языке
        await expect(HProfM.supportButtonName).toHaveText(HProfM.supportButtonNameEn_Expected);

        // 4.Нажать кнопку контактов со службой поддержки.
        await HProfM.supportButton.click();
        // 4.1.Открыто окно контактов со службой поддержки на выбранном языке, где доступны элементы выбора средств контактов: телефонный вызов и Telegram (возможна другая комбинация контактов).
        // - окно контактов со службой поддержки на выбранном языке
        await expect(HProfM.supportMenuHeader).toHaveText(HProfM.supportMenuHeaderEn_Expected);
        // - ? элементы выбора средств контактов
        // *.Закрыть окно контактов со службой поддержки.
        await DSysM.androidPressBackButton(1);
        break;
      
      case AuthM.appLanguage_Ru:
        // /*отладка*/ console.log('\n --> case Ru: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, русский).
        await HProfM.languageMenuItemRu.click();
        // 3.1.Закрыто окно выбора языка. Открыт экран профиля пользователя на выбранном языке, где доступны кнопка выбора языка, текст названия выбранного языка и кнопка контактов со службой поддержки на выбранном языке:
        // - окно
        await expect(HProfM.languageMenuHeader).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(HProfM.languageButton).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(HProfM.languageName).toHaveText(HProfM.languageNameRu_Expected);
        // - кнопка контактов со службой поддержки на выбранном языке
        await expect(HProfM.supportButtonName).toHaveText(HProfM.supportButtonNameRu_Expected);

        // 4.Нажать кнопку контактов со службой поддержки.
        await HProfM.supportButton.click();
        // 4.1.Открыто окно контактов со службой поддержки на выбранном языке, где доступны элементы выбора средств контактов: телефонный вызов и Telegram (возможна другая комбинация контактов).
        // - окно контактов со службой поддержки на выбранном языке
        await expect(HProfM.supportMenuHeader).toHaveText(HProfM.supportMenuHeaderRu_Expected);
        // - ? элементы выбора средств контактов
        // *.Закрыть окно контактов со службой поддержки.
        await DSysM.androidPressBackButton(1);
        break;
      
      case AuthM.appLanguage_Uz:
        // /*отладка*/ console.log('\n --> case Uz: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, узбекский).
        await HProfM.languageMenuItemUz.click();
        // 3.1.Закрыто окно выбора языка. Открыт экран профиля пользователя на выбранном языке, где доступны кнопка выбора языка, текст названия выбранного языка и кнопка контактов со службой поддержки на выбранном языке:
        // - окно
        await expect(HProfM.languageMenuHeader).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(HProfM.languageButton).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(HProfM.languageName).toHaveText(HProfM.languageNameUz_Expected);
        // - кнопка контактов со службой поддержки на выбранном языке
        await expect(HProfM.supportButtonName).toHaveText(HProfM.supportButtonNameUz_Expected);

        // 4.Нажать кнопку контактов со службой поддержки.
        await HProfM.supportButton.click();
        // 4.1.Открыто окно контактов со службой поддержки на выбранном языке, где доступны элементы выбора средств контактов: телефонный вызов и Telegram (возможна другая комбинация контактов).
        // - окно контактов со службой поддержки на выбранном языке
        await expect(HProfM.supportMenuHeader).toHaveText(HProfM.supportMenuHeaderUz_Expected);
        // - ? элементы выбора средств контактов
        // *.Закрыть окно контактов со службой поддержки.
        await DSysM.androidPressBackButton(1);
        break;
    
      default:
        console.log('\n --> в languageMenu нет элемента: ' + element + '\n');
        break;
    }
  }

  // 5.Выполнить шаги 2-4 для каждого доступного языка.
});

it('ab-u-tc-1004p: Показать или скрыть баланс', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно скрыть/отобразить баланс по картам и общий баланс <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя, при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс отображаются карты (или одна карта), балансы, кнопка Показать/Скрыть баланс.
  *
ШАГИ:
  1.Обратить внимание на общий баланс и баланс каждой карты.
  1.1.Отображаются соответствующие балансы.

  2.Нажать кнопку Показать/Скрыть баланс.
  2.1.Вместо балансов отображаются символы тире (могут отображаться другие подобные символы).

  3.Нажать кнопку Показать/Скрыть баланс.
  3.1.Отображаются соответствующие балансы (вместо символов тире или других подобных).
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-u-tc-1004p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNum = CardsD.phoneNum_5_hasCards;
  const phoneNum_pass = CardsD.phoneNum_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);
  
  // 1.Обратить внимание на сумму общего баланса и сумму баланса каждой карты.
  // 1.1.Отображаются суммы баланса.
  const totalBalance = await HomeM.totalBalance.getText();
  const cardBalance = await HomeM.cardBalance.getText();

  // 2.Нажать кнопку Показать/Скрыть баланс.
  await HomeM.showHideAmountButton.click();
  // await HomeM.cardBalance.waitForDisplayed({timeout: 5000});
  // 2.1.Вместо сумм баланса отображаются символы тире (могут отображаться другие подобные символы).
  await expect(HomeM.totalBalance).toHaveTextContaining(HomeM.balanceHidingSymbols);
  await expect(HomeM.cardBalance).toHaveTextContaining(HomeM.balanceHidingSymbols);
  // /*отладка*/ console.log(
  //   '\n-> ' + await HomeM.totalBalance.getText()  + ' = await HomeM.totalBalance.getText();'  +
  //   '\n-> ' + HomeM.balanceHidingSymbols          + ' = HomeM.balanceHidingSymbols'           +
  //   '\n-> ' + await HomeM.cardBalance.getText()   + ' = await HomeM.cardBalance.getText();'   +
  //   '\n-> ' + HomeM.balanceHidingSymbols          + ' = HomeM.balanceHidingSymbols'           + '\n');

  // 3.Нажать кнопку Показать/Скрыть баланс.
  await HomeM.showHideAmountButton.click();
  // 3.1.Отображаются соответствующие балансы (вместо символов тире или других подобных).
  await expect(await HomeM.totalBalance.getText()).toEqual(totalBalance);
  await expect(await HomeM.cardBalance.getText()).toEqual(cardBalance);
  // /*отладка*/ console.log(
  //   '\n-> ' + await HomeM.totalBalance.getText()  + ' = await HomeM.totalBalance.getText();'  +
  //   '\n-> ' + totalBalance                        + ' = totalBalance'                         +
  //   '\n-> ' + await HomeM.cardBalance.getText()   + ' = await HomeM.cardBalance.getText();'   +
  //   '\n-> ' + cardBalance                         + ' = cardBalance'                          + '\n');
});



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
it.skip('ab-x-ts-000x: Отладка', async () => {
  /** > базовые тесты (см. файл ТК 1 (Регистрация)):
   * - 22 Стр. регист, кнопка "Поддержка": Позитив (ш?: 1)
   * - ? ... <
  > Можно осуществить контакты со службой поддержки <
ПРЕДУСЛОВИЯ:
  1.Мессенджер Telegram установлен в тестируемом устройстве, а также выполнен вход в аккаунт пользователя.
  2.Выполнен запуск приложения Apex-bank, языком интерфейса выбран русский, открыт экран приложения Добро пожаловать, где доступна кнопка Поддержка.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов и Telegram (возможна другая комбинация контактов).
  
  2.Нажать элемент средства контактов Вызов.
  2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается номер телефона службы поддержки, а также доступна кнопка совершения телефонного вызова.

  3.Нажать кнопку совершения телефонного вызова.
  3.1.Открыт экран устройства выполнения телефонного вызова, где доступна кнопка завершения вызова.

  4.Выполнить разговор со службой поддержки и/или нажать кнопку завершения вызова.
  4.1.Открыт экран устройства со списком выполненных телефонных звонков, а также доступна кнопка устройства Назад.

  5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

  6.Нажать элемент средства контактов Telegram.
  6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения.

  7.Выполнить переписку со службой поддержки, и/или ввести соответствующий текст в поле ввода сообщения и отправить его.
  7.1.Введенный текст отображается в переписке отправленным, а также доступна кнопка устройства Назад.

  8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

  9.Выполнить шаги 1-8 для каждого доступного средства контакта.

  10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  10.1.Открыт экран приложения Добро пожаловать.
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-x-ts-000x';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // П.1.Мессенджер Telegram установлен в тестируемом устройстве, а также выполнен вход в аккаунт пользователя.
  // -?-
  // П.2.Выполнен запуск приложения Apex-bank, языком интерфейса выбран русский, открыт экран приложения Добро пожаловать, где доступна кнопка Поддержка:
  await AuthM.selectLanguage(AuthM.appLanguage_Ru);
  // - кнопка Поддержка
  await expect(AuthM.supportButton_1).toBeDisplayed();

  // 1.Нажать кнопку Поддержка.
  await AuthM.supportButton_1.click();
  // 1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов и Telegram (возможна другая комбинация контактов):
  // // - окно
  // await expect(AuthM.supportMenuHeader).toBeDisplayed();
  // // - элемент выбора средств контактов: Вызов
  // await expect(AuthM.supportMenuItemCall).toBeDisplayed();
  // // - элемент выбора средств контактов: Telegram
  // await expect(AuthM.supportMenuItemTelegram).toBeDisplayed();

  // // 10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  // // await driver.back();
  // await DSysM.androidPressBackButton(1);
  // // 10.1.Открыт экран приложения Добро пожаловать.
  // // - экран приложения Добро пожаловать
  // await expect(AuthM.welcomeScreenHeaderRu).toHaveText(AuthM.welcomeScreenHeaderRu_Expected);
  // // - кнопка Поддержка
  // await expect(AuthM.supportButton_1).toBeDisplayed();
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// * Пауза для контроля экрана
// await driver.pause(5000);
// *.Нажать кнопку Назад
// await driver.back();
// await DSysM.androidPressBackButton(1);
// *.Скрыть клавиатуру
// await driver.hideKeyboard();
// * Открыть отчет
// npx allure open

/* EOF describe */
});
// npx wdio config/wdio.android.conf.js
