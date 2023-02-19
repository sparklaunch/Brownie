/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        jumbotron: `url("jumbotron.svg")`
      }
    },
    screens: {
      desktop: "1200px",
      tablet: "768px",
      mobile: "375px"
    }
  },
  plugins: []
};
