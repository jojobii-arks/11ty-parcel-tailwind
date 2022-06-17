module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
      output: '.predist'
    },
    pathPrefix: '/11ty-parcel-tailwind/'
  };
};
