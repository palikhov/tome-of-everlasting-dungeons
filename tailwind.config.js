module.exports = {
  purge: [
    "./**/*.html",
    "./**/*.md",
    "./_assets/**/*.js",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
