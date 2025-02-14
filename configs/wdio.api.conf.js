const { removeSync } = require("fs-extra");

exports.config = {
  runner: "local",
  specs: ["../test/specs/api.js"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
  onPrepare: function (config, capabilities) {
    removeSync("allure-results/");
  },
  before: function (capabilities, specs) {},
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      console.error("Test failed:", test.title);
    }
  },
};
