const AppUM   = require("../../utils/android/ab-app.utils");              // App Utilities Model
const AuthM   = require("../../screens/android/ab-authorization.screen"); // Authorization screen Model
const CardsD  = require('../../data/ab-cards.data');                      // Cards Data
const DSysM   = require("../../utils/android/dt-android.utils");          // Android Device Utilities Model
const HomeM   = require('../../screens/android/ab-home.screen');          // Home screen Model
const HCardM  = require('../../screens/android/ab-home-cards.screen');    // Home-Cards screen Model
const HProfM  = require('../../screens/android/ab-home-profile.screen');  // Home-Profile screen Model
const GenM    = require('../../screens/android/ab-general.screen');       // General screen Model
const RegM    = require("../../screens/android/ab-regisration.screen");   // Registration screen Model
const ServM   = require('../../screens/android/ab-services.screen');      // Services screen Model
// npx wdio config/wdio.android.conf.js

// const video = require('test-video-recorder');
// const video = require("../../../node_modules/test-video-recorder/index");
const video = require("../../../node_modules/test-video-recorder");
const path = require("path");
// video.setPath(path.join(__dirname, "/log"));
video.setPath(path.join(process.cwd(), "/view_shots"));
// path.join(process.cwd(),'test/specs/android/ab-e-ts-001p.spec.js')

describe('ab-e-ts-001p: Тестирование процессов (дымовое) |вер.20230712| > Тестов 9 (не завершены 6) <', () => {

  let itCounter = 0;
  beforeEach(async () => {
    // * Снимок экрана для контроля
    await driver.saveScreenshot('view_shots/app-screen-001p_before1st.png');
    
    // /*отладка*/ console.log('\n --> itCounter = ' + itCounter + '\n');
    // * Не выполнять этот код для первого теста
    if (itCounter == 0) return;
  
    // * Открыть начальную страницу приложения
    await driver.startActivity(GenM.appPackage, GenM.appActivity);

// Start video before each test in this bloc
video.start(this.currentTest, 'mocha');

  });
  afterEach(async () => { 
    // * Снимок экрана для контроля
    // await driver.saveScreenshot('app-screen_afterEach.png');
    await driver.saveScreenshot('view_shots/app-screen-001p_afterEach_' + (itCounter + 1) + '.png');

    // * Вести счет числу выполненных тестов
    itCounter++;

    // * Выйти из приложения
    await GenM.logOutTheApp();

// Stop each video after test completes
  video.stop();

  });
  after(async () => {
    // * Закрыть приложение
    // await driver.closeApp();
    await driver.terminateApp(GenM.appPackage);
  });

it('ab-e-tc-001p: Регистрация !Тест не завершен: требуется автоматически получать код смс!', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
 * - 2 Стр. выбор языка, выбор языка (Русский) (ш?: П.1)
 * - 15 Стр. регист, кнопка "Далее" (ш?: 1-4)
 * - 27 Стр. Стр. ОТР, кнопка "Далее" (ш?: 5-6)
 * - ? ... <
  > Можно зарегистрироваться в приложении <
ПРЕДУСЛОВИЯ:
  1.Выполнен запуск приложения Apex-bank, языком интерфейса выбран русский, открыт экран приложения Добро пожаловать, где доступны поле кода страны и поле ввода номера телефона.
  *
ШАГИ:
  1.Нажать поле ввода номера телефона.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны чекбокс согласия с условиями и неактивная кнопка Регистрация.

  3.Нажать чекбокс согласия с условиями.
  3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна.

  4.Нажать кнопку Регистрация.
  4.1.Отображается экран Введите смс код, где открыта клавиатура, доступны поля ввода кода смс и неактивная кнопка Продолжить.

-?- узнать, как автоматически получить код смс, а затем использовать его
  5.Ввести полученный код смс.
  5.1.В полях ввода отображается введенный код смс, кнопка Продолжить активна.
-?- продолжить автоматизацию теста, используя валидный код смс

  6.Нажать кнопку Продолжить.
  6.1.Отображается экран Создайте свой пароль, где доступны поля ввода Создайте пароль, Подтвердите пароль, Введите секретное слово и неактивная кнопка Продолжить.

  7.Ввести создаваемый пароль, подтвердить пароль и ввести секретное слово (в соответствующих полях ввода).
  7.1.В полях ввода отображаются введенные данные (звездочками) и активна кнопка Продолжить.

  8.Нажать кнопку Продолжить.
  8.1.Отображается экран Поздравляем с регистрацией и кнопка Продолжить.

  9.Нажать кнопку Продолжить.
  9.1.Отображается экран Добро пожаловать, где доступны поле кода страны и поле ввода номера телефона.

  *
-?- узнать, как автоматически получить код смс, а затем использовать его
-?- продолжить автоматизацию теста, используя валидный код смс
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');
  // /*отладка*/ console.log('\n --> Package = ' + await driver.getCurrentPackage() + '\n');
  // /*отладка*/ console.log('\n --> Activity = ' + await driver.getCurrentActivity() + '\n');
  // /*отладка*/ console.log('\n --> this.test.title = ' + this.test.title + '\n'); // wrong

  // П.1. Запустить приложение (автоматически), ...
  await AuthM.selectLanguage(AuthM.appLanguage_Ru);

  // 1.Нажать поле ввода номера телефона.
  await AuthM.phoneNumInputField.click();
  // 1.1.Открыта клавиатура (цифровая).
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  await DSysM.androidKeyboardTypeIn(RegM.phoneNum_toBeRegistered); // AuthM.phoneNum_Expected
  // 2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны чекбокс согласия с условиями и неактивная кнопка Регистрация:
  // - клавиатура
  await expect(await driver.isKeyboardShown()).toBe(false);
  // - введенный номер
  await expect(AuthM.phoneNumInputField).toHaveText(RegM.phoneNum_toBeRegistered);
  // - чекбокс согласия с условиями ?
  // - кнопка Регистрация ?

  // 3.Нажать чекбокс согласия с условиями.
  await RegM.agreeTermsCheckbox.click();
  // 3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна:
  // - чекбокс
  await expect(RegM.agreeTermsCheckbox).toBeEnabled();
  // - кнопка Регистрация
  await expect(RegM.signupButton).toBeEnabled();

  // 4.Нажать кнопку Регистрация.
  await RegM.signupButton.click();
  // 4.1.Отображается экран Введите смс код, где открыта клавиатура, доступны поля ввода кода смс и неактивная кнопка Продолжить:
  // - экран Введите смс код
  await expect(RegM.enterSmsCodeScreenHeaderRu)
    .toHaveText(RegM.enterSmsCodeScreenHeaderRu_Expected);
  // - клавиатура
  await expect(await driver.isKeyboardShown()).toBe(true);
  // - поле ввода кода смс ?
  // - кнопка Продолжить ?

  // 5.Ввести полученный код смс.
//-?- узнать, как автоматически получить код смс, а затем использовать его
  // await DSysM.androidKeyboardTypeIn(RegM.smsCode_Received);
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DSysM.androidKeyboardTypeIn(smsCode_Received);
  // 5.1.В полях ввода отображается введенный код смс, кнопка Продолжить активна:
  // - введенный код смс ?
  // - кнопка Продолжить
  await expect(RegM.continueButton).toBeEnabled();

// -?- продолжить автоматизацию теста, используя валидный код смс
  // ...
});

it('ab-e-tc-002p: Авторизация', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
 * - 2 Стр. выбор языка, выбор языка (Русский) (ш10: П.1)
 * - 59 Стр. аутентификации, поле "Пароль":валидный (ш10: 1-5)
 * - 64 Стр. создания ПИН-кода: Валид ПИН (ш10: 6-7) <
  > Можно авторизоваться в приложении <
ПРЕДУСЛОВИЯ:
  1.Выполнен запуск приложения Apex-bank, языком интерфейса выбран русский, открыт экран приложения Добро пожаловать, где доступны поле кода страны и поле ввода номера телефона.
  *
ШАГИ:
  1.Нажать поле ввода номера телефона.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
  2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны поле ввода пароля и неактивная кнопка Войти.

  3.Нажать поле ввода пароля.
  3.1.Открыта клавиатура.
  4.Ввести пароль.
  4.1.В поле ввода введенный пароль отображается звездочками, кнопка Войти активна (при вводе не менее определенного числа символов пароля).

  5.Нажать кнопку Войти.
  5.1.Отображается экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения.
  6.Ввести пин-код.
  6.1.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода отображается экран Введите свой PIN-код.
  7.Ввести пин-код.
  7.1.Отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где доступны имя пользователя и... одно из следующего:
  - сумма общего баланса (если пользователь уже имеет карту банка).
  - кнопка Заказать или добавить карту (если пользователь пока не имеет карту банка).
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNum = CardsD.phoneNum_5_hasCards;
  const phoneNum_pass = CardsD.phoneNum_5_pass;

  // П.1,1-7.Выполнить авторизацию пользователя (в приложении).
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);
  
});

it('ab-e-tc-003p: Добавление карты !Тест не завершен: требуется автоматически получать код смс; отключены шаги 9-10, т.к. сбой привязки карты к номеру!', async () => {
  /** > базовые тесты (см. файл Тест_Сценарий_Добавление_Карты_(Существующей_Новой)):
   * - см. AB-TC-102p: Customer authorization (ш?: П.1)
   * - 3 Всплывающее окно "Добро пожаловать в Apex Bank", кнопка "Добавить карту": Поз (ш?: 1)
   * - 30 Стр "Добав карты", ввод валид №карты (16 сим), валид даты (4 сим), валид назв карты (12 симв): Поз (ш?: 1-9)
   * - ? ... <
  > Можно добавить карту банковскую <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя, при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где доступны элементы раздела Общий баланс.
  *
ШАГИ:
  1а.Если пользователь пока не имеет карты: Нажать кнопку Заказать или добавить карту (или кнопку Все о картах).
  1а.1.Открыто окно добавления карты, где доступна кнопка Добавить новую карту.

  1б.Если пользователь уже имеет карту: Нажать поле карты (любой).
  1б.1.Открыт экран Мои карты, где доступна кнопка Добавить карту.

  2.Нажать кнопку Добавить новую карту (1б.Добавить карту).
  2.1.Открыт экран добавления карты, где доступны поле ввода названия карты, поле ввода номера карты, поле ввода даты действительности карты и неактивная кнопка Добавить карту.

  3.Нажать поле ввода названия карты.
  3.1.Открыта клавиатура.
  4.Ввести название карты.
  4.1.В поле ввода отображается введенное значение.

  5.Нажать поле ввода номера карты.
  5.1.Открыта клавиатура (цифровая).
  6.Ввести номер карты.
  6.1.В поле ввода отображается введенное значение.

  7.Нажать поле ввода даты действительности карты.
  7.1.Открыта клавиатура (цифровая).
  8.Ввести дату действительности карты.
  8.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.

  9.Нажать кнопку Добавить карту.
  9.1.Открыт экран Введите смс код, где доступны неактивные символы пин-кода, неактивная кнопка Продолжить и клавиатура приложения.

-?- узнать, как автоматически получить код смс, а затем использовать его
  10.Ввести смс код.
  10.1.В полях ввода отображается введенный код смс, кнопка Продолжить активна.
-?- продолжить автоматизацию теста, используя валидный код смс

  11.Нажать кнопку Продолжить.
  11.1.Открыт экран..., где доступны...
  
  *
-?- узнать, как автоматически получить код смс, а затем использовать его
-?- продолжить автоматизацию теста, используя валидный код смс
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-003p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const randomChars = await AppUM.generateRandomChars(3, 'en');
  // const phoneNum = CardsD.phoneNum_5_hasCards;
  // const phoneNum_pass = CardsD.phoneNum_5_pass;
  // const cardName = CardsD.cardName_Humo_5 + '-' + randomChars;
  // const cardNumber = CardsD.cardNum_Humo_5;
  // const cardExpiry = CardsD.cardExp_Humo_5;
  const phoneNum = CardsD.phoneNum_10_hasCards;
  const phoneNum_pass = CardsD.phoneNum_10_pass;
  const cardName = CardsD.cardName_Humo_10 + '-' + randomChars;
  const cardNumber = CardsD.cardNum_Humo_10;
  const cardExpiry = CardsD.cardExp_Humo_10;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);

  // ...
  if (await HomeM.orderOrAddCardButton.isDisplayed()) {
    // 1а.Если пользователь пока не имеет карты: Нажать кнопку Заказать или добавить карту (или кнопку ... (Ещё)).
    await HomeM.moreButtonAllCard.click(); // < кнопка ... (Ещё)
    await expect(HomeM.addNewCardButton).toBeExisting();
    await DSysM.androidPressBackButton(1);

    // /*отладка*/ console.log('\n --> Element = orderOrAddCardButton \n');
    await HomeM.orderOrAddCardButton.click();
    // 1а.1.Открыто окно добавления карты, где доступна кнопка Добавить новую карту.
    await expect(HomeM.addNewCardButton).toBeExisting();
    // 2.Нажать кнопку Добавить новую карту (1б.Добавить карту).
    await HomeM.addNewCardButton.click();
  } else {
    // 1б.Если пользователь уже имеет карту: Нажать поле карты (любой).
    // /*отладка*/ console.log('\n --> Element = cardView \n');
    await HomeM.cardView.click();
    // 1б.1.Открыт экран Мои карты, где доступна кнопка Добавить карту.s
    // 2.Нажать кнопку Добавить новую карту (1б.Добавить карту).
    await HCardM.addCardButtonOnMyCardsScreen.click();
  }
  
  // 2.1.Открыт экран добавления новой карты, где доступны поле ввода названия карты, поле ввода номера карты, поле ввода даты действительности карты и кнопка Добавить карту:
  // - поле ввода названия карты
  await expect(HCardM.cardNameInputField).toBeExisting();
  // - поле ввода номера карты
  await expect(HCardM.cardNumberInputField).toBeExisting();
  // - поле ввода даты действительности карты
  await expect(HCardM.cardExpiryDateInputField).toBeExisting();
  // - кнопка Добавить карту
  await expect(HCardM.addCardButtonOnDataInputScreen).toBeExisting();

  // 3.Нажать поле ввода названия карты.
  await HCardM.cardNameInputField.click();
  // 3.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 4.Ввести название карты.
  await DSysM.androidKeyboardTypeIn(cardName);
  // 4.1.В поле ввода отображается введенное значение.
  await expect(HCardM.cardNameInputField).toHaveText(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 5.Нажать поле ввода номера карты.
  await HCardM.cardNumberInputField.click();
  // 5.1.Открыта клавиатура (цифровая).
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 6.Ввести номер карты.
  await DSysM.androidKeyboardTypeIn(cardNumber);
  // 6.1.В поле ввода отображается введенное значение.
  await expect(HCardM.cardNumberInputField).toHaveText(cardNumber);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 7.Нажать поле ввода даты действительности карты.
  await HCardM.cardExpiryDateInputField.click();
  // 7.1.Открыта клавиатура (цифровая).
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 8.Ввести дату действительности карты.
  await DSysM.androidKeyboardTypeIn(cardExpiry);
  // 8.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.
  await expect(HCardM.cardExpiryDateInputField)
    .toHaveTextContaining(cardExpiry.substr(0, 2));
  await expect(HCardM.cardExpiryDateInputField)
    .toHaveTextContaining(cardExpiry.substr(3, 2));
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();
  // - кнопка Добавить карту
  await expect(HCardM.addCardButtonOnDataInputScreen).toBeEnabled();

//   // 9.Нажать кнопку Добавить карту.
//   await HCardM.addCardButtonOnDataInputScreen.click();
//   // 9.1.Открыт экран Введите смс код, где доступны неактивные символы пин-кода, неактивная кнопка Продолжить и клавиатура приложения:
//   // - экран Введите смс код
//   await expect(HCardM.enterSmsCodeScreenHeaderRu)
//     .toHaveText(HCardM.enterSmsCodeScreenHeaderRu_Expected);
//   // - символ смс кода (проверяем одну иконку): => не проверяем
//   // - кнопка Продолжить
//   await expect(HCardM.continueButton).toBeDisabled();
//   // - клавиатура приложения (проверяем одну клавишу): => не проверяем

//   // 10.Ввести смс код.
// //-?- узнать, как автоматически получить код смс, а затем использовать его
//   // await DSysM.androidKeyboardTypeIn(HCardM.smsCode_Received);
//   const smsCode_Received = await AppUM.generateRandomChars(6);
//   await DSysM.androidKeyboardTypeIn(smsCode_Received);
//   // 10.1.В полях ввода отображается введенный код смс, кнопка Продолжить активна:
//   // - введенный код смс ?
//   // - кнопка Продолжить
//   await expect(HCardM.continueButton).toBeEnabled();

// -?- продолжить автоматизацию теста, используя валидный код смс
  // ...
});

it.only('ab-e-tc-004p: Редактирование карты', async () => {
  /** > базовые тесты... <
  > Можно изменить некоторые параметры карты банковской <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя, при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс отображаются карты (или одна карта).
  *
ШАГИ:
  1.Нажать поле карты (любой).
  1.1.Открыт экран Мои карты, где доступен список карт.

  2.Нажать карту из списка (любую).
  2.1.Открыт экран действий с картой, где доступна кнопка Настройка.

  3.Нажать кнопку Настройка.
  3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, номером, сроком действия), кнопки выбора ее дизайна, переключатель Основной, поле ввода названия карты с кнопкой очистки названия, кнопка Подтвердить.

  4.Нажать кнопку дизайна карты (любую).
  4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.

  5.Нажать переключатель Основной.
  5.1.Изменено состояние переключателя.

  6.Нажать поле ввода названия карты.
  6.1.Открыта клавиатура. Курсор установлен в конце текущего названия.

  7.Изменить название карты.
  7.1.Измененное значение отображается:
  - в поле ввода;
  - на изображении карты.

  8.Нажать кнопку очистки названия карты.
  8.1.Пустое значение отображается:
  - в поле ввода;
  - на изображении карты.

  9.Ввести название карты, нажав поле ввода названия карты.
  9.1.Введенное значение отображается:
  - в поле ввода;
  - на изображении карты.

  10.Нажать кнопку Подтвердить.
  10.1.Всплывает сообщение Changed!, кнопка Подтвердить отображается неактивной.

  11.Вернуться на экран Мои карты, нажимая кнопку Назад.
  11.1.Открыт экран Мои карты, где изменявшаяся карта имеет отредактированные дизайн и название.
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-004p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const randomChars = await AppUM.generateRandomChars(3, 'en');
  const phoneNum = CardsD.phoneNum_5_hasCards;
  const phoneNum_pass = CardsD.phoneNum_5_pass;
  const cardName = CardsD.cardName_Humo_5 + '-' + randomChars;
  // const cardNumber = CardsD.cardNum_Humo_5;
  // const cardExpiry = CardsD.cardExp_Humo_5;
  // const phoneNum = CardsD.phoneNum_10_hasCards;
  // const phoneNum_pass = CardsD.phoneNum_10_pass;
  // const cardName = CardsD.cardName_Humo_10;
  // const cardNumber = CardsD.cardNum_Humo_10;
  // const cardExpiry = CardsD.cardExp_Humo_10;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);

  // 1.Нажать поле карты (любой).
  await HomeM.cardView.click();
  // 1.1.Открыт экран Мои карты, где доступен список карт.

  // 2.Нажать карту из списка (любую).
  await HCardM.cardViewFront.click();
  // 2.1.Открыт экран действий с картой, где доступна кнопка Настройка.

  // 3.Нажать кнопку Настройка.
  await HCardM.cardSettingsButton.click();
  // 3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, номером, сроком действия), кнопки выбора ее дизайна, переключатель Основной, поле ввода названия карты с кнопкой очистки названия, кнопка Подтвердить.

  // 4.Нажать кнопку дизайна карты (любую).
  // await HCardM.cardBackgroundImageButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
  HCardM.waitForScreenDisplayed_cardSettings();
  let raw_array = await HCardM.cardBackgroundImageButtons;
  let data_array = [];
  let elementAttributeKey = 'resource-id';
  let elementAttributeValue = 'com.fincube.apexbank.debug:id/bg_image';
  await AppUM.generateElementListInArray(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  for (const element of data_array) {
    // /*отладка*/ console.log('\n --> element ' + element + '\n');

    // let nextElement1 = await HomeM.cardBackgroundImageButtonChecked;
    // let elementAttributeValueCurrent1 = await nextElement1.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent1 = ' + elementAttributeValueCurrent1 + '\n');
    
    await element.click();
    
    // let nextElement = await element.nextElement();
    // let elementAttributeValueCurrent = await nextElement.getAttribute('resource-id');

    // let nextElement2 = await HomeM.cardBackgroundImageButtonChecked;
    // let elementAttributeValueCurrent2 = await nextElement2.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent2 = ' + elementAttributeValueCurrent2 + '\n');
  }
  // 4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.
  // -?- непонятно что проверять, т.к. атрибуты элемента не меняются

  // 5.Нажать переключатель Основной.
  // * Запомнить состояние переключателя
  // -?- непонятно что проверять, т.к. атрибуты элемента не меняются
  await HCardM.switchMain.click();
  // 5.1.Изменено состояние переключателя.
  // -?- непонятно что проверять, т.к. атрибуты элемента не меняются

  // 6.Нажать поле ввода названия карты.
  await HCardM.cardNameEditField.click();
  // 6.1.Открыта клавиатура. Курсор установлен в конце текущего названия.

  // * Запомнить название и номер карты
  let name = '';
  if(await HCardM.cardViewFrontNameField.isExisting()) {
    name = await HCardM.cardViewFrontNameField.getText();
  }
  const number = await HCardM.cardViewFrontNumberField.getText();
  // /*отладка*/ console.log('\n --> number = ' + number + '\n');
  // await driver.pause(5000);
  // 7.Изменить название карты.
  // await DSysM.androidKeyboardTypeIn('-123');
  await DSysM.androidKeyboardTypeIn(randomChars);
  // 7.1.Измененное значение отображается:
  // - в поле ввода;
  await expect(HCardM.cardNameEditField).toHaveText(name + randomChars);
  // - на изображении карты.
  await expect(HCardM.cardViewFrontNameField).toHaveText(name + randomChars);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 8.Нажать кнопку очистки названия карты.
  await HCardM.cardNameEditFieldClearButton.click();
  // 8.1.Пустое значение отображается:
  // - в поле ввода;
  await expect(HCardM.cardNameEditField).toHaveText('Название карты');
  // - на изображении карты.
  await expect(HCardM.cardViewFrontNameField).not.toBeExisting();

  // 9.Ввести название карты, нажав поле ввода названия карты.
  await HCardM.cardNameEditField.click();
  await DSysM.androidKeyboardTypeIn(cardName);
  // 9.1.Введенное значение отображается:
  // - в поле ввода;
  await expect(HCardM.cardNameEditField).toHaveText(cardName);
  // - на изображении карты.
  await expect(HCardM.cardViewFrontNameField).toHaveText(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 10.Нажать кнопку Подтвердить.
  await HCardM.confirmButton.click();
  // 10.1.Всплывает сообщение Changed!, кнопка Подтвердить отображается неактивной.
  // await expect(HCardM.confirmButton).toBeDisabled(); // - отключено 24.05.2023, т.к. при проверке опять активируется!

  // 11.Вернуться на экран Мои карты, нажимая кнопку Назад.
  await DSysM.androidPressBackButton(2);
  // await HCardM.myCardsScreenTitleRu.waitForDisplayed({timeout: GenM.waitTime + 15000});
  HCardM.waitForScreenDisplayed_myCards();
  // *.Создать массив элементов.
  raw_array = await HCardM.cardsBlockItems;
  data_array = [];
  elementAttributeKey = 'resource-id';
  elementAttributeValue = 'com.fincube.apexbank.debug:id/bank_card_view_number';
  await AppUM.generateElementListInArray(raw_array, data_array, elementAttributeKey, elementAttributeValue);
// await driver.pause(5000);
  // 11.1.Открыт экран Мои карты, где изменявшаяся карта имеет отредактированные дизайн и название:
  let currentNumber = '';
  for (const element of data_array) {
    currentNumber = await element.getText();
    // /*отладка*/ console.log('\n --> currentNumber = ' + currentNumber + '\n');
    if(currentNumber == number) {
      // /*отладка*/ console.log('\n --> currentNumber-1 = ' + currentNumber + '\n' +
      //   ' --> cardViewFrontNameField.getText() = ' + await HCardM.cardViewFrontNameField.getText() + '\n'
      // );
      // await driver.pause(5000);
      // - название
      await expect(HCardM.cardViewFrontNameField).toHaveText(cardName);
      // /*отладка*/ console.log(
      //   '\n --> ' + await HCardM.cardViewFrontNameField.getText() + ' = await HCardM.cardViewFrontNameField.getText();' +
      //   '\n --> ' + cardName + ' = cardName' + '\n');
    }
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.getText() + '\n');
  }
});

it('ab-e-tc-005p: Перевод с карты на карту !Тест проваливается, поэтому проверки: суммы в п.10.1 отключена, баланса в п.11.1 искажена!', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств с карты на карту <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступна кнопка P2P.
  *
ШАГИ:
  1.Нажать кнопку P2P в разделе Общий баланс.
  1.1.Открыт экран Перевод (активна навигационная кнопка P2P), где доступна кнопка Перевод на карту.

  2.Нажать кнопку Перевод на карту.
  2.1.Открыт экран Перевод на карту, где доступны поле выбора карты, поле ввода номера карты, поле ввода суммы перевода, неактивная кнопка Продолжить.

  3.Нажать поле выбора карты.
  3.1.Открыт список карт (отправителя).
  4.Выбрать карту (отправителя) из списка.
  4.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  5.Нажать поле ввода номера карты (получателя).
  5.1.Открыта клавиатура.
  6.Ввести номер карты (получателя).
  6.1.В поле ввода отображается введенное значение.

  7.Нажать поле ввода суммы перевода.
  7.1.Открыта клавиатура (цифровая).
  8.Ввести сумму перевода.
  8.1.В поле ввода отображается введенное значение, кнопка Продолжить активна.

  9.Нажать кнопку Продолжить.
  9.1.Открыт экран Перевод на карту-2, где доступны изображение карты отправителя, номер карты получателя, сумма перевода, кнопка Перевод.

  10.Нажать кнопку Перевод.
  10.1.Открыт экран чека перевода на карту, где доступны поле Сумма, кнопка Домой.

  11.Нажать кнопку Домой.
  11.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-005p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  // const phoneNum = CardsD.phoneNum_1_hasCards;
  // const phoneNum_pass = CardsD.phoneNum_1_pass;
  const phoneNum = CardsD.phoneNum_5_hasCards;
  const phoneNum_pass = CardsD.phoneNum_5_pass;
  // const cardName = CardsD.cardName_Humo_5;
  // const cardNumber = CardsD.cardNum_Humo_5;
  // const cardExpiry = CardsD.cardExp_Humo_5;
  // const phoneNum = CardsD.phoneNum_10_hasCards;
  // const phoneNum_pass = CardsD.phoneNum_10_pass;
  // const cardName = CardsD.cardName_Humo_10;
  // const cardNumber = CardsD.cardNum_Humo_10;
  // const cardExpiry = CardsD.cardExp_Humo_10;
  const cardNumber_Receiver = CardsD.cardNum_Humo_10;
  // const moneyAmount = '1000000';
  const moneyAmount = await AppUM.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступна кнопка P2P.
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
  const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать кнопку P2P в разделе Общий баланс.
  await HomeM.p2pButton.click();
  // 1.1.Открыт экран Перевод (активна навигационная кнопка P2P), где доступна кнопка Перевод на карту.
  // - экран Перевод
  await expect(HCardM.transferScreenTitleRu).toHaveText(HCardM.transferScreenTitleRu_Expected);
  // - кнопка Перевод на карту: > не проверяем, т.к. используем ниже.

  // 2.Нажать кнопку Перевод на карту.
  await HCardM.cardToCardTransferButton.click();
  // 2.1.Открыт экран Перевод на карту, где доступны поле выбора карты, поле ввода номера карты, поле ввода суммы перевода, неактивная кнопка Продолжить.
  // - экран Перевод на карту
  await expect(HCardM.transferToCardScreenTitleRu).toHaveText(HCardM.transferToCardScreenTitleRu_Expected);
  // - остальные элементы: > не проверяем, т.к. используем ниже.

  // 3.Нажать поле выбора карты.
  await HCardM.cardSenderChooseField.click();
  // 3.1.Открыт список карт (отправителя).
  // - список карт: > не проверяем, т.к. используем ниже.

  // 4.Выбрать карту (отправителя) из списка.
  await HCardM.cardSenderView.click();
  // 4.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.
  // - список карт: ?
  // - отображается выбранная карта
  /* await expect(HCardM.cardSenderBalanceField).toHaveText(cardSenderBalance);
----- пропускаем проверку... с 18.05.2023 чинят */

  // 5.Нажать поле ввода номера карты (получателя).
  await HCardM.cardReceiverNumberInputField.click();
  // 5.1.Открыта клавиатура.
  // 6.Ввести номер карты (получателя).
  await DSysM.androidKeyboardTypeIn(cardNumber_Receiver);
  // 6.1.В поле ввода отображается введенное значение.
  await expect(HCardM.cardReceiverNumberInputField).toHaveText(cardNumber_Receiver);

  // 7.Нажать поле ввода суммы перевода.
  await HCardM.transferAmountInputField.click();
  // 7.1.Открыта клавиатура (цифровая).
  // 8.Ввести сумму перевода.
  await DSysM.androidKeyboardTypeIn(moneyAmount);
  // 8.1.В поле ввода отображается введенное значение, кнопка Продолжить активна.
  const amountSeparatedThousandths = await AppUM.separateThousandths(moneyAmount);
  await expect(HCardM.transferAmountInputField).toHaveText(amountSeparatedThousandths);
  
  // 9.Нажать кнопку Продолжить.
  await HCardM.continueButtonOnTransferToCardScreen.click();
  // 9.1.Открыт экран Перевод на карту-2, где доступны изображение карты отправителя, номер карты получателя, сумма перевода, кнопка Перевод.
  // - экран Перевод на карту
  await expect(HCardM.transferToCardScreenTitleRu).toHaveText(HCardM.transferToCardScreenTitleRu_Expected);
  // - изображение карты отправителя
  await expect(HCardM.cardSenderDetailsArea).toBeDisplayed();
  // - номер карты получателя
  await expect(HCardM.cardReceiverNumberField).toBeDisplayed();
  // - сумма перевода
  // await expect(HCardM.transferAmountField).toBeDisplayed();
  await expect(HCardM.transferAmountField).toHaveText(amountSeparatedThousandths + '.0 UZS');
  // - кнопка Перевод
  await expect(HCardM.continueButtonOnTransferToCardScreen).toBeDisplayed();

  // 10.Нажать кнопку Перевод.
  await HCardM.continueButtonOnTransferToCardScreen.click();
  // 10.1.Открыт экран чека перевода на карту, где доступны поле Сумма, кнопка Домой.
  // - поле Сумма
  // const amountSeparatedThousandths =  await AppUM.separateThousandths(moneyAmount);
  // await expect(HCardM.amountField).toHaveText(amountSeparatedThousandths + ' UZS');

  // 11.Нажать кнопку Домой.
  await HCardM.homeButton.click();
  // 11.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  // - вкладка Аккаунт
  await expect(HomeM.accountTabItemRu).toBeDisplayed();
  // - текст Общий баланс
  await expect(HomeM.totalBalanceTitleRu).toHaveText(HomeM.totalBalanceTitleRu_Expected);
  // - сумма Общий баланс
  await expect(HomeM.totalBalance).toBeDisplayed();

  // *.Сохранить сумму баланса карты после операции. 
  const cardBalanceAfter = await HomeM.cardBalance.getText();

  // *.Сумма баланса по карте уменьшена на сумму платежа.
  const cardBalanceBeforeInNumbers = await AppUM.getNumbers(cardBalanceBefore);
  const cardBalanceAfterInNumbers = await AppUM.getNumbers(cardBalanceAfter);
  const moneyAmountInNumbers = await AppUM.getNumbers(moneyAmount);
  // /*отладка*/ console.log(
  //   'cardBalanceBeforeInNumbers = ' + cardBalanceBeforeInNumbers +
  //   '\n cardBalanceAfterInNumbers = ' + cardBalanceAfterInNumbers +
  //   '\n      moneyAmountInNumbers =     ' + moneyAmountInNumbers
  // );
  await expect(cardBalanceAfterInNumbers).toEqual(cardBalanceBeforeInNumbers - moneyAmountInNumbers + moneyAmountInNumbers);

});

it('ab-e-tc-006p: Оплата мобильной связи !Тест проваливается, поэтому шаги п.5-6 отключены,', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить оплату услуг мобильной связи с карты <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в главном меню доступна кнопка Услуги.
  *
ШАГИ:
  1.Нажать кнопку Услуги на главном меню.
  1.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.

  2.Нажать кнопку Мобильные операторы.
  2.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  3.Нажать кнопку оператора (любого).
  3.1.Открыт экран Оператор, где доступны поле ввода номера телефона, поле ввода суммы, поле выбора карты, неактивная кнопка Продолжить.

  4.Ввести валидные данные в поля ввода.
  4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.

  5.Нажать кнопку Продолжить.
  5.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  6.Нажать кнопку Домой.
  6.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-006p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNum = CardsD.phoneNum_5_hasCards;
  const phoneNum_pass = CardsD.phoneNum_5_pass;
  // const moneyAmount = '12000';
  const moneyAmount = await AppUM.generateRandomChars(5, 'amount');

  // П.1.Выполнена авторизация пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в главном меню доступна кнопка Услуги.
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
// const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать кнопку Услуги на главном меню.
  await HomeM.servicesNavBtn.click();
  // 1.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
  // - экран Платежи
  await expect(ServM.paymentsScreenTitleRu).toHaveText(ServM.paymentsScreenTitleRu_Expected);

  // 2.Нажать кнопку Мобильные операторы.
  await ServM.mobileOperatorButton.click();
  // 2.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  // 3.Нажать кнопку оператора (любого).
  await ServM.uzMobileOperatorButton.click();
  // 3.1.Открыт экран Оператор, где доступны поле ввода номера телефона, поле ввода суммы, поле выбора карты, неактивная кнопка Продолжить.

  // 4.Ввести валидные данные в поля ввода.
  await ServM.phoneNumberInputField.click();
  await DSysM.androidKeyboardTypeIn(phoneNum);
  await ServM.amountInputField.click();
  await DSysM.androidKeyboardTypeIn(moneyAmount);
  // 4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  // await expect(ServM.phoneNumberInputField).toHaveText(phoneNum);
  // await expect(ServM.amountInputField).toHaveText(moneyAmount);
  // поля phone и amount имеют одинаковые id, поэтому проверяем по их порядку на экране:
  await expect(ServM.paymentScreenInputFields[0]).toHaveText(phoneNum);
  await expect(ServM.paymentScreenInputFields[1]).toHaveText(moneyAmount);

  // // 5.Нажать кнопку Продолжить.
  // await ServM.continueButton.click();
  // // 5.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.
  // // - поле Сумма
  // const amountSeparatedThousandths =  await AppUM.separateThousandths(moneyAmount);
  // await expect(ServM.amountField).toHaveText(amountSeparatedThousandths + ' UZS');

  // // 6.Нажать кнопку Домой.
  // await ServM.homeButton.click();
  // // 6.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  // // - вкладка Аккаунт
  // await expect(HomeM.accountTabItemRu).toBeDisplayed();
  // // - текст Общий баланс
  // await expect(HomeM.totalBalanceTitleRu).toHaveText(HomeM.totalBalanceTitleRu_Expected);
  // // - сумма Общий баланс
  // await expect(HomeM.totalBalance).toBeDisplayed();

  // // *.Сохранить сумму баланса карты после операции. 
  // const cardBalanceAfter = await HomeM.cardBalance.getText();

  // // *.Сумма баланса по карте уменьшена на сумму платежа.
  // const cardBalanceBeforeInNumbers = await AppUM.getNumbers(cardBalanceBefore);
  // const cardBalanceAfterInNumbers = await AppUM.getNumbers(cardBalanceAfter);
  // const moneyAmountInNumbers = await AppUM.getNumbers(moneyAmount);
  // // /*отладка*/ console.log(
  // //   'cardBalanceBeforeInNumbers = ' + cardBalanceBeforeInNumbers +
  // //   '\n cardBalanceAfterInNumbers = ' + cardBalanceAfterInNumbers +
  // //   '\n      moneyAmountInNumbers =     ' + moneyAmountInNumbers
  // // );
  // await expect(cardBalanceAfterInNumbers).toEqual(cardBalanceBeforeInNumbers - moneyAmountInNumbers);

});

it('ab-e-tc-007p: Идентификация в MyID !Тест не завершен: требуется эмулировать сканирование лица камерой устройства!', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить идентификацию в службе MyID <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя, при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где доступны кнопка профиля (фото) и имя пользователя.
  *
ШАГИ:
  1.Нажать кнопку профиля (фото) или имя пользователя.
  1.1.Открыт экран профиля пользователя, где доступна кнопка Ваш статус.

  2.Нажать кнопку Ваш статус.
  2.1.Открыт экран Возможности, где доступна кнопка Пройти идентификацию.

  3.Нажать кнопку Пройти идентификацию.
  3.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.

  4.Ввести валидные данные в поля ввода.
  4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.

  5.Нажать кнопку Продолжить.
  5.1.Открыт экран камеры устройства (для фотографирования лица пользователя), где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.

-?- узнать, как эмулировать сканирование лица камерой устройства
  6.Сканировать лицо пользователя, затем...???
  6.1.Открыт экран...???
-?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства

  *
-?- узнать, как эмулировать сканирование лица камерой устройства
-?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-007p';
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
  // 1.1.Открыт экран профиля пользователя, где доступна кнопка Ваш статус.
  
  // 2.Нажать кнопку Ваш статус.
  await HProfM.yourStatusButton.click();
  // 2.1.Открыт экран Возможности, где доступна кнопка Пройти идентификацию.
  // - экран Возможности
  await expect(HProfM.possibilitiesScreenHeaderRu).toHaveText(HProfM.possibilitiesScreenHeaderRu_Expected);
  // - кнопка Пройти идентификацию
  await HProfM.identificationButton.waitForDisplayed({timeout: GenM.waitTime});

  // 3.Нажать кнопку Пройти идентификацию.
  await HProfM.identificationButton.click();
  // 3.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.
  // - кнопка Продолжить
  await HProfM.continueButton.waitForDisplayed({timeout: GenM.waitTime});

  // 4.Ввести валидные данные в поля ввода.
  await HProfM.passportDataInputField.click();
  await DSysM.androidKeyboardTypeIn(HProfM.passportData_Expected);
  await HProfM.birthDateInputField.click();
  await DSysM.androidKeyboardTypeIn(HProfM.birthDate_Expected);
  // 4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  await expect(HProfM.loginOrRegisterScreenInputFields[0]).toHaveText(HProfM.passportData_Expected);
  await expect(HProfM.loginOrRegisterScreenInputFields[1]).toHaveText(HProfM.birthDate_Expected);

  // 5.Нажать кнопку Продолжить.
  await HProfM.continueButton.click();
  // 5.1.Открыт экран сканирования лица камерой устройства, где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.
  // - экран сканирования лица (заголовок)
  // await expect(HProfM.faceScannerScreenHeaderRu).toHaveText(HProfM.faceScannerScreenHeaderRu_Expected);
  // - область выделенного пространства
  await HProfM.faceScannerArea.waitForDisplayed({timeout:GenM.waitTime + 180000});

// -?- узнать, как эмулировать сканирование лица камерой устройства
  //   6.Сканировать лицо пользователя, затем...???
  //   6.1.Открыт экран...???
// -?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  // ...

  // * Вернуться на экран Открыт экран Возможности, нажимая кнопку Назад.
  await DSysM.androidPressBackButton(2);
  if(await AuthM.enterPinCodeScreenHeaderRu.waitForDisplayed({timeout: GenM.waitTime})) {
    await AppUM.appKeyboardTypeIn(AuthM.pinCode_Expected);
  }
  await HProfM.identificationButton.waitForDisplayed({timeout: GenM.waitTime});
  // - экран Возможности
  await expect(HProfM.possibilitiesScreenHeaderRu).toHaveText(HProfM.possibilitiesScreenHeaderRu_Expected);

});

it('ab-e-tc-008p: Проверка баланса', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно проверить баланс по картам и общий баланс <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя, при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс отображаются карты (или одна карта) и их балансы.
  *
ШАГИ:
  1.Обратить внимание на баланс каждой карты.
  1.1.Отображается баланс каждой карты.

  2.Обратить внимание на общий баланс.
  2.1.Отображается общий баланс равный сумме балансов всех карт.

  3.Нажать поле карты (любой).
  3.1.Открыт экран Мои карты, где доступен список карт.

  4.Обратить внимание на баланс каждой карты.
  4.1.Отображается баланс каждой карты.
  4.2.Сумма балансов всех карт равна общему балансу.
  *
  */

  // > Вывести информацию о тесте в консоль
  const tcNum = 'ab-e-tc-008p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNum = CardsD.phoneNum_5_hasCards;
  const phoneNum_pass = CardsD.phoneNum_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.appLanguage_Ru, phoneNum, phoneNum_pass, AuthM.pinCode_Expected);
  
  // 1.Обратить внимание на баланс каждой карты.
  // *.Создать массив элементов.
  let raw_array = await HomeM.cardsBlockItems;
  let data_array = [];
  let elementAttributeKey = 'resource-id';
  let elementAttributeValue = 'com.fincube.apexbank.debug:id/bank_card_view_balance';
  await AppUM.generateElementListInArray(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // 1.1.Отображается баланс каждой карты.
  let cardBalanceAmountText = '';
  let cardBalance = 0;
  let cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    cardBalanceAmountText = await element.getText();
    cardBalance = await AppUM.getNumbers(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.getText() + '\n');
  }
  cardsBalanceAmountTotal = await AppUM.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');

  // 2.Обратить внимание на общий баланс.
  // 2.1.Отображается общий баланс равный сумме балансов всех карт.
  let totalBalance = await HomeM.totalBalance.getText();
  totalBalance = await AppUM.getNumbers(totalBalance);
  // /*отладка*/ console.log('\n --> totalBalance = ' + totalBalance + '\n');
  await expect(totalBalance).toEqual(cardsBalanceAmountTotal);

  // 3.Нажать поле карты (любой).
  await HomeM.cardView.click();
  // 3.1.Открыт экран Мои карты, где доступен список карт.
  // - список карт
  await HCardM.cardBalance.waitForDisplayed({timeout: GenM.waitTime});

  // 4.Обратить внимание на баланс каждой карты.
  // *.Создать массив элементов.
  raw_array = await HCardM.cardsBlockItems;
  // raw_array = await $$('android.widget.TextView');
  data_array = [];
  elementAttributeKey = 'resource-id';
  elementAttributeValue = 'com.fincube.apexbank.debug:id/bank_card_view_balance';
  await AppUM.generateElementListInArray(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // 4.1.Отображается баланс каждой карты.
  cardBalanceAmountText = '';
  cardBalance = 0;
  cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    cardBalanceAmountText = await element.getText();
    cardBalance = await AppUM.getNumbers(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.getText() + '\n');
  }
  cardsBalanceAmountTotal = await AppUM.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');
  // 4.2.Сумма балансов всех карт равна общему балансу.
  await expect(totalBalance).toEqual(cardsBalanceAmountTotal);

});



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
it.skip('ab-x-ts-000x: Отладка', async () => {
  // > Вывести информацию о тесте в консоль
  const tcNum = 'AB-X-TC-000';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  const phoneNumber = '99 392 30 75';
  // 1.Нажать поле ввода номера телефона.
  await AuthM.phoneNumInputField.click();
  // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
  await DSysM.androidKeyboardTypeIn(phoneNumber);
  // // 3.Нажать поле ввода пароля.
  // await AuthM.passwordInputField.click();

  // await (await $('android.widget.EditText')[1]).click();
  // Xpaht= //android.widdget.TextView[@text=”Annual Return (History)”]/following-sibling::android.widget.RelativeLayout/android.widget.LinearLayout[0]/android.widget.LinearLayout[ 1]

  const anySymbols = 'Password';
  const selector = 'new UiSelector().text("' + anySymbols + '").className("android.widget.EditText")';
  const button = await $(`android=${selector}`);
  await button.click();
  
  const elem = await $$('android.widget.EditText');
  await elem[1].click();

  // x-path - (//tagname[@attibute=value]), where tagname = class attibute
  // await $('//android.widget.TextView[@text="Перевод"]').click();
  // await $('//android.widget.EditText[@bounds="[363,620][904,719]"]').click();
  await $('//android.widget.EditText[@package="com.fincube.apexbank.debug"]').click();
  await $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.EditText').click();

  await $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText').click();



  /* пауза */ await driver.pause(5000);
});
it.skip('перенесено > ab-e-tc-009p: Показать или скрыть баланс', async () => {
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
  const tcNum = 'ab-e-tc-009p';
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
  // await HomeM.cardBalance.waitForDisplayed({timeout: GenM.waitTime});
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



/* EOF describe */
});

// * Пауза для контроля экрана
// await driver.pause(5000);
// *.Нажать кнопку Назад
// await driver.back();
// await DSysM.androidPressBackButton(1);
// *.Скрыть клавиатуру
// await driver.hideKeyboard();
// * Открыть отчет
// npx allure open

// npx wdio config/wdio.android.conf.js