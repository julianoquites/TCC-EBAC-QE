export const config = {
  runner: "local",
  port: 4723,

  specs: ["./test/specs/**/*.js"],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "ebac",
      "appium:platformVersion": "9.0",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "br.com.lojaebac",
      "appium:appActivity": "br.com.lojaebac.MainActivity",
      "appium:autoGrantPermissions": true,
      "appium:noReset": true,
      "appium:newCommandTimeout": 240,
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    [
      "appium",
      {
        args: {
          address: "localhost",
          port: 4723,
        },
        logPath: "./logs",
      },
    ],
  ],

  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
