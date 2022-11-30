module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/mainStyle.css");
    eleventyConfig.addPassthroughCopy('./src/imgs/');

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};