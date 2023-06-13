const {DateTime} = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.ignores.add("README.md");

    // Formats a date like "2000-12-31" to "31 DEC 2000". See: https://moment.github.io/luxon/api-docs/index.html#datetimetoformat
    eleventyConfig.addFilter("myDate", function (dateObj) {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd MMM yyyy").toLowerCase();
    });

    // Note: setTemplateFormats must NOT overlap any files in addPassthoughCopy
    eleventyConfig.setTemplateFormats("njk,md");
    eleventyConfig.addPassthroughCopy("src/*.css");
    eleventyConfig.addPassthroughCopy("src/*.svg");

    return {
        dir: {
            input: "src",
            output: "out",
        },
        passthroughCopyFile: true,
    };
};
