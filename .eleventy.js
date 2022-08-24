const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("static");
    // Add a filter using the Config API
    eleventyConfig.setTemplateFormats([
        "md",
        "css" // css is not yet a recognized template extension in Eleventy
    ]);
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
    });
    eleventyConfig.addFilter("postDateTime", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.toISODate);
    });
};