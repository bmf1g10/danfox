module.exports = function(eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy CNAME for GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });
  
  // Copy CNAME for GitHub Pages
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
