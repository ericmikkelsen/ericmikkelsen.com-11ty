module.exports = function(eleventyConfig) {
    // Add a filter using the Config API
    eleventyConfig.setTemplateFormats([
        "md",
        "css" // css is not yet a recognized template extension in Eleventy
    ]);
};