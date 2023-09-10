const common = require("@dh253/nds");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(common, {
    domain: "https://dustinheisey.com",
  });

  eleventyConfig.on("afterBuild", () => {
    const socialPreviewImagesDir = "_site/img/og/";
    fs.readdir(socialPreviewImagesDir, (err, files) => {
      if (files.length > 0) {
        files.forEach((filename) => {
          if (filename.endsWith(".svg")) {
            let imageUrl = socialPreviewImagesDir + filename;
            Image(imageUrl, {
              formats: ["jpeg"],
              outputDir: "./" + socialPreviewImagesDir,
              filenameFormat: (id, src, width, format, options) => {
                let outputFilename = filename.substring(0, filename.length - 4);
                return `${outputFilename}.${format}`;
              },
            })
              .then(() => {
                fs.unlink(imageUrl, (err) => {
                  if (err) throw err;
                });
              })
              .catch((error) => {
                console.error(`Failed to process image: ${error}`);
              });
          }
        });
      }
    });
  });

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};
