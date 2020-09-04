const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");

const plugins = [
  autoprefixer({
    overrideBrowserslist: ["> 1%", "last 4 versions", "ie >= 9"],
  }),
];

if (process.env.NODE_ENV == "production") {
  plugins.push(
    purgecss({
      content: ["./src/*.html"],
    })
  );
}

module.exports = {
  plugins: plugins,
};
