class ServicesScreen {

/* CONSTANTS */
paymentsScreenTitleRu_Expected = 'Платежи';
paymentScreenTitleRu_Expected = 'Платеж';



/* SELECTORS */
get mobileOperatorButton() {
  return $('//android.widget.TextView[@text="Мобильные операторы"]');}
get paymentsScreenTitleRu() {
  return $('//android.widget.TextView[@text="Платежи"]');}
get uzMobileOperatorButton() {
  return $('//android.widget.TextView[@text="UzMobile"]');}
get phoneNumberInputField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get amountInputField() {
  return $('//android.widget.EditText[@text="Сумма"]');}
get paymentScreenInputFields() {
  return $$('android.widget.EditText');}
get continueButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}
get amountField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/transferred_amount"]');}
get homeButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/back_to_home"]');}



/* EOF class */
}

module.exports = new ServicesScreen();