module.exports = function (eleventyConfig) {
    // Copy assets
    eleventyConfig.addPassthroughCopy("assets");

    // Define posts collection
    eleventyConfig.addCollection("personal_projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("posts/personal/*.md");
    });

    eleventyConfig.addCollection("academic_projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("posts/academic/*.md");
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site",
            layouts: "_includes/layouts"
        }
    };
};
