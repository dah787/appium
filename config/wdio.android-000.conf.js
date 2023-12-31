// to start run: npx wdio config/wdio.android.conf.js

const path = require('path');
const config = require('./wdio.shared.conf');
const allure = require('allure-commandline');

// ====================
// Runner Configuration
// ====================
// config.port = 4723; // >>> moved to config.services below

// ==================
// Specify Test Files
// ==================
config.specs = [
  // path.join(process.cwd(),'test/specs/android/webview*.js')
  // path.join(process.cwd(),'test/specs/android/apexbank*.js')
  // path.join(process.cwd(),'test/specs/android/ab-smoke*.spec.js')
  // path.join(process.cwd(),'test/specs/android/ab-ts-11p*.spec.js')

  // path.join(process.cwd(),'test/specs/android/ab-ts-01p.spec.js')
  path.join(process.cwd(),'test/specs/android/ab-e-ts-001p.spec.js')
  // path.join(process.cwd(),'test/specs/android/ab-u-ts-1001p.spec.js')
];

// ============
// Capabilities
// ============
config.capabilities = [{
  "appium:platformName": "Android",

  "appium:platformVersion": "10.0",
  "appium:deviceName": "Nexus S v.10",
  // "appium:platformVersion": "11.0",
  // "appium:deviceName": "Pixel 4 v.11",
  
  // "appium:platformVersion": "12L",
  // "appium:deviceName": "Pixel 4 v.12L",
  // "appium:platformVersion": "12L",
  // "appium:deviceName": "Pixel 4a v.12L",

  // "appium:platformVersion": "13.0",
  // "appium:deviceName": "Pixel 5 v.13",
  // "appium:platformVersion": "13.0",
  // "appium:deviceName": "Pixel 6 v.13",
  // "appium:platformVersion": "13.0",
  // "appium:deviceName": "Pixel XL v.13",

  "appium:automationName": "UiAutomator2",
  "appium:app": path.join(process.cwd(), "app/android/Apexbank-1.0.7-debug.apk"),
  // "appium:app": path.join(process.cwd(), "app/android/Apexbank-1.0.17.1-debug.apk"),
  // "appium:app": path.join(process.cwd(), "app/android/Apexbank-1.0.21-debug.apk"),
  "appium:autoGrantPermissions": true
}];

// ===================
// Test Configurations
// ===================
// https://appium.io/docs/en/writing-running-appium/server-args/
// https://github.com/appium/appium-uiautomator2-driver#chromedriverchrome-compatibility
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    // chromedriverExecutableDir: path.join(process.cwd(), "node_modules/appium-uiautomator2-driver/node_modules/appium-chromedriver/chromedriver/win/chromedriver_win32_v74.0.3729.6.exe"),
    // relaxedSecurity: true
    // allowInsecure: "chromedriver_autodownload"
  },
  // logPath: './'
}]];

config.reporters = ['spec', ['allure', {
  outputDir: 'allure-results',
  disableWebdriverStepsReporting: false,
  disableWebdriverScreenshotsReporting: false,
}]];

config.mochaOpts = {
  ui: 'bdd',
  timeout: 120000 //60000
};

config.afterTest = async function(test, context, { error /*, result, duration, passed, retries*/ }) {
  if (error) {
      await driver.takeScreenshot();
  }
};

config.onComplete = function(/*exitCode, config, capabilities, results*/) {
  const reportError = new Error('Could not generate Allure report')
  const generation = allure(['generate', 'allure-results', '--clean'])
  return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
          () => reject(reportError),
          5000)

      generation.on('exit', function(exitCode) {
          clearTimeout(generationTimeout)

          if (exitCode !== 0) {
              return reject(reportError)
          }

          console.log('Allure report successfully generated')
          resolve()
      })
  })
};

exports.config = config;
