class Home_ProfileScreen {

/* CONSTANTS */
possibilitiesScreenHeaderRu_Expected = 'Возможности';
passportData_Expected = 'AB1234567';
birthDate_Expected = '11.12.2002';
faceScannerScreenHeaderRu_Expected = 'Убедитесь, что Ваше лицо находится в выделенном пространстве';

languageNameEn_Expected = 'English (UK)';
languageNameRu_Expected = 'Русский';
languageNameUz_Expected = 'O‘zbekcha';

supportButtonNameEn_Expected = 'Support';
supportButtonNameRu_Expected = 'Поддержка';
supportButtonNameUz_Expected = 'Qo‘llab-quvvatlash';

supportMenuHeaderEn_Expected = 'Support contact';
supportMenuHeaderRu_Expected = 'Контакт со службой поддержки';
supportMenuHeaderUz_Expected = 'Qo‘llab-quvvatlash aloqa';



/* SELECTORS */

// экран-1 (б/и) профиля
get yourStatusButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_status"]');}
get languageButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_language"]');}
get languageName() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_language_current"]');}
  // экран-1 (б/и) профиля > окно выбора языка
  get languageMenuHeader() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get languageMenuItemEn() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_english"]');}
  get languageMenuItemRu() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_russian"]');}
  get languageMenuItemUz() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_uzbek"]');}
  get languageMenuItems() {
    return $$('android.view.TextView');}

get supportButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_support"]');}
get supportButtonName() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_support"]');}
  // экран-1 (б/и) профиля > окно выбора контакта со службой поддержки
  get supportMenuHeader() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}

get appLogOutButton() { // appLogOut
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_logout"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-11 (б/и) профиля > экран-1 Возможности
get possibilitiesScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Возможности"]');}
get identificationButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_identification"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-12 (б/и) профиля > экран-2 Вход или регистрация
get loginOrRegisterScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Вход или регистрация"]');}
get passportDataInputField() {
  return $('//android.widget.EditText[@text="AA1234567 | ПИНФЛ"]');}
get scannerButton() {
  return $('//android.widget.ImageButton[@text=""]');}
get birthDateInputField() {
  return $('//android.widget.EditText[@text="дд.мм.гггг"]');}
get loginOrRegisterScreenInputFields() {
  return $$('android.widget.EditText');}
get continueButton() {
  return $('//android.widget.TextView[@text="Продолжить"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-13 (б/и) профиля > экран-3 (сканирования лица) Убедитесь, что Ваше лицо...
get faceScannerScreenHeaderRu() { // makeSureFaceInScannerFocusHeaderRu
  return $('//android.widget.TextView[@text="Убедитесь, что Ваше лицо находится в выделенном пространстве"]');}
get faceScannerArea() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/myidFaceGraphic"]');}



/* EOF class */
}

module.exports = new Home_ProfileScreen();