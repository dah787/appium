// to start run: npx wdio config/wdio.android.bs.conf.js

const path = require('path');
const config = require('./wdio.shared.conf');
const allure = require('allure-commandline');

// ========================
// Browserstack Credentials
// ========================
config.user = 'dahzohomail_QvsKoS';
config.key = 'Rgys4jzrPx3x4ZWCgWvs';

// ==================
// Specify Test Files
// ==================
config.specs = [
  path.join(process.cwd(),'test/specs/android/ab-ts-11p*.spec.js')
];

// ============
// Capabilities
// ============
config.capabilities = [{
  "platformName": "Android", // without the "appium:" prefix

  "appium:platformVersion": "11.0",
  "appium:deviceName": "Google Pixel 4",

  "appium:automationName": "UiAutomator2",
// "appium:app": "bs://2953b7f2aeb201d9445449b1be71274eb854f9a3", // >>> moved to services here
  "appium:autoGrantPermissions": true
}];
  
// ===================
// Test Configurations
// ===================
config.services = [
  ['browserstack', {
      app: 'bs://2953b7f2aeb201d9445449b1be71274eb854f9a3',
      testObservability: true,
      testObservabilityOptions: {
          projectName: "Your project name goes here",
          buildName: "The static build job name goes here e.g. Nightly regression"
      },
      browserstackLocal: true
  }]
];

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
