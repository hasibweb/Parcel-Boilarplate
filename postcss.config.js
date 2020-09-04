const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");

const plugins = [
  purgecss({
    content: ["./src/*.html"],
  }),
  autoprefixer({
    overrideBrowserslist: ["> 1%", "last 4 versions", "ie >= 9"],
  }),
];

module.exports = {
  plugins: plugins,
};
