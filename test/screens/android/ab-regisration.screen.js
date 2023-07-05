class RegistrationScreen {
/* CONSTANTS */
phoneNum_toBeRegistered = '90 952 08 54';
smsCode_Received = '123456';
enterSmsCodeScreenHeaderRu_Expected = 'Введите смс код';



/* SELECTORS : screen 1/?, Registration (for unregistered phone numbers): Приветствие*/
get agreeTermsCheckbox() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checkbox"]');}

get agreeTermsTextEn() { // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="I agree with the terms of the public offer"]');}

get signupButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_sign_up"]');}

/* SELECTORS : screen 2/?, Registration (for unregistered phone numbers): Введите смс код*/
get backButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/backButton"]');}

get supportButton_2() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/support_button"]');}

get enterSmsCodeScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Введите смс код"]');}

get smsVerificationTextEn() { // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="We\'ve just send you sms verification code on your phone number"]');}
get smsVerificationTextRu() { // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="Мы отправили код подтверждения на ваш номер телефона в SMS"]');}

get phoneNumEntered() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_phone"]');}
get phoneNumEnteredTime() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_time"]');}

get continueButton() {// enterSmsCodeScreen, createPasswordScreen
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

/* SELECTORS : screen 3/?, Registration: Создайте свой пароль*/
get createPasswordScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Создайте свой пароль"]');}
get createPasswordInputField() {
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
  return $('//android.widget.EditText[@text="Создайте пароль"]');}
get confirmPasswordInputField() {
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
  return $('//android.widget.EditText[@text="Подтвердить пароль"]');}
get enterSecretWordInputField() {
  return $('//android.widget.EditText[@text="Введите секретное слово"]');}
// get continueButton On createPasswordScreen() {
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

/* SELECTORS : screen 4/?, Registration: Поздравляем*/
get congratulationsScreenHeaderRu() {
  return $('//android.widget.TextView[@text="*Поздравляем!Вы успешно зарегистрировались в Apex Bank*"]');}
// get continueButton On congratulationsScreen() {
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}



/* EOF class */
}

module.exports = new RegistrationScreen();