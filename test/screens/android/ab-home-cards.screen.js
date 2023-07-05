const GenM = require('../../screens/android/ab-general.screen'); // General screen Model

class Home_CardsScreen {

/* CONSTANTS */
enterSmsCodeScreenHeaderRu_Expected = 'Введите смс код';
smsCode_Received = '123456';

transferScreenTitleRu_Expected = 'Перевод';
transferToCardScreenTitleRu_Expected = 'Перевод на карту';



/* SELECTORS */

// экран-1 Мои карты
waitForScreenDisplayed_myCards() {
  this.myCardsScreenTitleRu.waitForDisplayed({timeout: GenM.waitTime + 15000});
}
get myCardsScreenTitleRu() {
  return $('//android.widget.TextView[@text="Мои карты"]');}
get cardsBlockItems() {
  return $$('android.widget.TextView');}
get addCardButtonOnMyCardsScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/addCardButton"]');}
get cardViewFront() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get cardBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_balance"]');}
get cardViewFrontNameField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_name"]');}
// get cardViewFrontNumberField() {
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_number"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-2 Добавить карту > экран (б/и) ввода данных
get cardNameInputField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_name"]');}
get cardNumberInputField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_number"]');}
get cardExpiryDateInputField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_expiry_date"]');}
get addCardButtonOnDataInputScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_add_card"]');}

// экран-21 Добавить карту > экран Введите смс код
get enterSmsCodeScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Введите смс код"]');}
get continueButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-3 (б/и) действий с картой
get cardViewBack() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewBack"]');}
get cardSettingsButton() {
  return $('//android.widget.TextView[@text="Настройка"]');}

// экран-31 (б/и) действий с картой > экран (б/и) настройки карты
waitForScreenDisplayed_cardSettings() { // wait_for_screen_displayed() {
  this.cardBackgroundImageButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
}
get cardViewFrontBalanceField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_balance"]');}
get cardViewFrontNumberField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_number"]');}
get switchMain() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/switch_main"]');}
get cardBackgroundImageButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bg_image"]');}
get cardBackgroundImageButtonChecked() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checked"]');}
get cardBackgroundImageButtons() {
  return $$('android.widget.ImageView');}
get cardNameEditField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get cardNameEditFieldClearButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
get confirmButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_confirm"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-4 Перевод
get transferScreenTitleRu() {
  return $('//android.widget.TextView[@text="Перевод"]');}
get cardToCardTransferButton() {
  return $('//android.widget.TextView[@text="Перевод на карту"]');}

// экран-41 Перевод > экран-1 Перевод на карту
get transferToCardScreenTitleRu() {
  return $('//android.widget.TextView[@text="Перевод на карту"]');}
get cardSenderChooseField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/iv_choose_card"]');}
get cardSenderBalanceField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_balance"]');}
get cardReceiverNumberInputField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/etReceiverNumber_itemReceiverCard"]');}
get transferAmountInputField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/etTransferAmount_transferToCard"]');}
get cardSenderView() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/senderCardsRecyclerView"]');}
get continueButtonOnTransferToCardScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/buttonNext_TransferToCard"]');}

// экран-42 Перевод > экран-2 Перевод на карту
get cardSenderDetailsArea() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/ivCard_transferCardDetail"]');}
get cardReceiverNumberField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvRecipientCardNumber_transferToCardDetail"]');}
get transferAmountField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTransferAmount_transferToCardDetail"]');}

// экран-43 Перевод > экран-3 (б/и) чека перевода на карту
get amountField() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_amount"]');}
get homeButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_back_to_home"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* EOF class */
}

module.exports = new Home_CardsScreen();