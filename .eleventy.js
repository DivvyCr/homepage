const { DateTime } = require("luxon");
const eleventySyntaxHL = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    /*
      I cannot use the `.gitignore` file for the 11ty ignores,
      mainly due to the README file, which should appear on GitHub but not on the website.
      Thankfully, 11ty's default ignores are sane and handle most of the work for me.
     */
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.ignores.add("projects/_*");
    eleventyConfig.ignores.add("blog/_*");

    /* See: https://www.11ty.dev/docs/plugins/syntaxhighlight/
       In short, this plugin allows us to use PrismJS by appending a language to the code block, like:
       ```hs
       double :: Integer -> Integer
       double = (*2)
       ```
     */
    eleventyConfig.addPlugin(eleventySyntaxHL);

    /* See: https://moment.github.io/luxon/api-docs/index.html#datetimetoformat
       Formats a date like "2000-12-31" to "31 DEC 2000".
     */
    eleventyConfig.addFilter("myDate", function(dateObj) {
	return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd MMM yyyy").toLowerCase();
    });

    // setTemplateFormats must NOT overlap any files in addPassthoughCopy
    eleventyConfig.setTemplateFormats("html,njk,md");
    eleventyConfig.addPassthroughCopy('design/css');
    eleventyConfig.addPassthroughCopy('assets/');

    return {
	passthroughCopyFile: true
    };
};
