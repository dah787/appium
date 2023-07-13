class AppUtilities {
  
/* SELECTORS */
// app keyboard
get appKeyboardNum_1() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_1"]');}
get appKeyboardNum_2() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_2"]');}
get appKeyboardNum_3() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_3"]');}
get appKeyboardNum_4() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_4"]');}
get appKeyboardNum_5() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_5"]');}
get appKeyboardNum_6() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_6"]');}
get appKeyboardNum_7() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_7"]');}
get appKeyboardNum_8() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_8"]');}
get appKeyboardNum_9() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_9"]');}
get appKeyboardNum_0() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_0"]');}
get appKeyboardBackspace() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_backspace"]');}



/* FUNCTIONS */
async appKeyboardTypeIn(value) {
  // /*отладка*/ console.log('\n --> value-0 = ' + value + '\n');
  const str1 = value.at(-1);
  // /*отладка*/ console.log('\n --> str1 = ' + str1 + '\n');
  value = str1 + value.slice(0, -1);
  // /*отладка*/ console.log('\n --> value-1 = ' + value + '\n');
  let symbolsArray = value.split('');

  // symbolsArray.forEach(element => {
  for (const element of symbolsArray) {
    // /*отладка*/ console.log('\n --> symbolsArray.forEach(element) = ' + element + '\n');

    
          await driver.pause(1000); // для БраузерСтак

    
    switch (element) {
      // цифры
      case '0':
        this.appKeyboardNum_0.click();
        break;
      case '1':
        this.appKeyboardNum_1.click();
        break;
      case '2':
        this.appKeyboardNum_2.click();
        break;
      case '3':
        this.appKeyboardNum_3.click();
        break;
      case '4':
        this.appKeyboardNum_4.click();
        break;
      case '5':
        this.appKeyboardNum_5.click();
        break;
      case '6':
        this.appKeyboardNum_6.click();
        break;
      case '7':
        this.appKeyboardNum_7.click();
        break;
      case '8':
        this.appKeyboardNum_8.click();
        break;
      case '9':
        this.appKeyboardNum_9.click();
        break;

      default:
        console.log('\n --> в appKeyboardTypeIn нет элемента: ' + element + '\n');
        break;
    }
  }//);
}

async generateElementListInArray(raw_array, data_array, elementAttributeKey, elementAttributeValue) { // appList(raw_array, ...)
  let elementAttributeValueCurrent = '';
  for (const element of raw_array) {
    // elementAttributeValueCurrent = await element.getAttribute('resource-id');
    elementAttributeValueCurrent = await element.getAttribute(elementAttributeKey);
    if(elementAttributeValueCurrent == elementAttributeValue){
      // /*отладка*/ console.log('\n --> elementAttributeValueCurrent = ' + elementAttributeValueCurrent + '\n');
      data_array.push(element);
    }
  }
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + '\n');
  // /*отладка*/ console.log('\n --> data_array[1] = ' + await data_array[1].getAttribute('resource-id') + '\n');
}

async generateElementListInArray_Debug(raw_array, data_array, elementAttributeKey, elementAttributeValue_1, elementAttributeValue_2) { // appList(raw_array, ...)
  let elementAttributeValue_Current = '';
  
  for(let i = 0, l = raw_array.length; i < l; i++) { // for (const element of raw_array) {
    // elementAttributeValue_Current = await element.getAttribute('resource-id');
    elementAttributeValue_Current = await raw_array[i].getAttribute(elementAttributeKey);
    if(elementAttributeValue_Current == elementAttributeValue_1){
      // /*отладка*/ console.log(
      //   '\n --> ' + elementAttributeValue_1       + ' = elementAttributeValue_1' +
      //   '\n --> ' + elementAttributeValue_Current + ' = elementAttributeValue_Current' + '\n');
      // /*отладка*/ await driver.pause(5000);
      data_array.push(raw_array[i]); // .push(element)

      for(let y = i+1; y < l; y++) {
        elementAttributeValue_Current = await raw_array[y].getAttribute(elementAttributeKey);
        if(elementAttributeValue_Current == elementAttributeValue_2){
          // /*отладка*/ console.log(
          //   '\n --> ' + elementAttributeValue_2       + ' = elementAttributeValue_2' +
          //   '\n --> ' + elementAttributeValue_Current + ' = elementAttributeValue_Current' + '\n');
          // /*отладка*/ await driver.pause(5000);
          data_array.push(raw_array[y]);
          y = l; // terminates second loop // break;
        }
      }
    }
  }
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n');
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getText() + ' = data_array[0].getText()' +
  //   '\n --> ' + await data_array[1].getText() + ' = data_array[1].getText()' +
  //   '\n --> ' + await data_array[2].getText() + ' = data_array[2].getText()' +
  //   '\n --> ' + await data_array[3].getText() + ' = data_array[3].getText()' +
  //   '\n');
  // /*отладка*/ await driver.pause(15000);
}

async generateRandomChars(length, charType) { // randomChars(length, charType)
  // Declare all characters
  // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // const chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
  // const chars = '0123456789';
  let chars = '';
  switch (charType) {
    case 'en':
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      break;

    case 'ru': // ! неизвестны коды кириллицы, используемые в appKeyboardTypeIn(value)
      chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
      break;

    case 'amount':
      chars = '123456789';
      break;

    default:
      chars = '0123456789';
      break;
  }

  // Pick characers randomly
  let str = '';
  for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
}

async generateRandomCharsOfSet(length, charSet, charType) {
  let chars = '';
  if(charSet){
    chars = charSet;
  } else {
    switch (charType) {
      case 'en':
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        break;

      case 'ru': // ! неизвестны коды кириллицы, используемые в appKeyboardTypeIn(value)
        chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
        break;

      case 'amount':
        chars = '123456789';
        break;

      default:
        chars = '0123456789';
        break;
    }
  }

  // Pick characers randomly
  let str = '';
  for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
}

async getNumbers(value) { // removeLetters(value)
  const string = value.replace(/[a-z-+()\s]/gi, '');
  // /*отладка*/ console.log('\n --> string = ' + string + '\n');
  // /*отладка*/ console.log('\n --> typeof Number(string) = ' + typeof Number(string) + '\n');
  return Number(string);
}

async roundNumber(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

async separateThousandths(value) {
  const symbolsArray = value.split('');
  let string = '';

  for (let i = symbolsArray.length - 1; i >= 0 ; i--) {
    // /*отладка*/ console.log('\n --> symbolsArray[' + i + '] = ' + symbolsArray[i] + '\n');
    if((string.length+1)%4 == 0) string = ' ' + string;
    string = symbolsArray[i] + string;
  }
  // /*отладка*/ console.log('\n --> string = ' + string + '\n');
  return string;
}



/* EOF class */
}

module.exports = new AppUtilities();
