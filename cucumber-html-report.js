const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "json-logs", // ** Path of .json file **//
    reportPath: "./reports/cucumber-html-report.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "chrome version",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});