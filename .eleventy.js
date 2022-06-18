require('dotenv').config({ path: '.deployenv' });

module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
      output: '.predist'
    },
    pathPrefix: process.env.PATH_PREFIX
  };
};
