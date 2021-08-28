module.exports = function(eleventyConfig) {
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("static");
    // Add a filter using the Config API
    eleventyConfig.setTemplateFormats([
        "md",
        "css" // css is not yet a recognized template extension in Eleventy
    ]);
};