/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const whitelist = [
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
].reduce(
  (result, color) =>
    result.push(`text-${color}-600`, `bg-${color}-600`, `bg-${color}-500`) &&
    result,
  []
);

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  safelist: whitelist,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
