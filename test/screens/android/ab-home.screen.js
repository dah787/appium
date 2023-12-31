class HomeScreen {

/* CONSTANTS */
profileName_NadiaPage_Expected = 'Nadia Page'; // related to '99 966 46 60'
// profileName_NadiaPage_Expected = 'Дмитрий'; // related to '99 966 46 60'
totalBalanceTitleRu_Expected = 'Общий баланс';
balanceHidingSymbols = '--.-- UZS';



/* SELECTORS */

// главный экран: панель навигации нижняя / bottom navigation bar
get homeNavBtn() { // до 26.05.2023 - homeScreenNavItem
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_home"]');}
get p2pNavBtn() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_transfer"]');}
get servicesNavBtn() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_payment"]');}

// главный экран: блок профиля
get profileLayout() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileLayout"]');}
get profileButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileButton"]');}
get profileName_NadiaPage() {
  return $('//android.widget.TextView[@text="Nadia Page"]');}
  // return $('//android.widget.TextView[@text="Дмитрий"]');}

// главный экран: панель навигации верхняя / upper navigation bar
get accountTabItem() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTab"]');}
get accountTabItemEn() {
  return $('//android.widget.TextView[@text="Account"]');}
get accountTabItemRu() {
  return $('//android.widget.TextView[@text="Аккаунт"]');}

// главный экран: блок общего баланса
get totalBalanceTitleRu() {
  return $('//android.widget.TextView[@text="Общий баланс"]');}
  
// главный экран: блок общего баланса 1/4 (no card yet): заказать или добавить карту
get orderOrAddCardTitleRu() {
  return $('//android.widget.TextView[@text="Добавьте карту или закажите в приложении для получения доступа к функционалу"]');}
get orderOrAddCardButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnOrderOrAddCard"]');}
get moreButtonAllCard() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnAllCard"]');}
get addNewCardButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnAddCard"]');}

// главный экран: блок общего баланса 2/4 (already have card): сумма общего баланса
get totalBalance() { // totalBalanceAmount
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvBalance"]');}
get showHideAmountButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnHideShowBalance"]');}

// главный экран: блок общего баланса 3/4 (already have card): услуги
get p2pButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnP2P"]');}
get exchangeButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnExchange"]');}
get favoritesButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnFavorites"]');}
get moreButtonBalanceMenu() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnBalanceMenu"]');}

// главный экран: блок общего баланса 4/4 (already have card): список карт
get cardsListBlock() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/listCard"]');}
get cardsBlockItems() {
  return $$('android.widget.TextView');}
get cardView() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view"]');}
get cardLogo() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_currency_logo"]');}
get cardBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_balance"]');}
get cardName() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_name"]');}



/* EOF class */
}

module.exports = new HomeScreen();