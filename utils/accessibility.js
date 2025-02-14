const { AxeBuilder } = require("@axe-core/webdriverio");
const { createHtmlReport } = require("axe-html-reporter");
let reportCounter = 1;

async function runAccessibility(browser) {
  let currentUrl = await browser.getUrl();
  await browser.url(currentUrl);
  await browser.pause(2000);

  const axeBuilder = new AxeBuilder({ client: browser });

  const results = await axeBuilder.analyze();
  //console.log("Acessibility Results: -->", results)/;
  const reportFileName = `report_${reportCounter}.html`;
  // Increment the counter for the next report
  reportCounter++;
  createHtmlReport({
    results: results,
    options: {
      projectKey: "Swag Labs",
      outputDir: "accessibility-report",
      reportFileName: reportFileName,
    },
  });
}

module.exports = { runAccessibility };
