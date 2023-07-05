class AppTelegramScreen { // related to device tested

/* SELECTORS */
get supportTelegramName() {
  return $('//android.widget.TextView[@text="Jaksibay Khakimov"]');}
get supportTelegramTextInputField() {
  return $('//android.widget.EditText[@text="Message"]');}



/* EOF class */
}

module.exports = new AppTelegramScreen();