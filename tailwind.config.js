/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "light-red (cta text)": "hsl(356, 100%, 66%)",
        "very-light-red (cta hover bg)": "hsl(355, 100%, 74%)",
        "very-dark-blue (headings)": "hsl(208, 49%, 24%)",
        "grayish-blue (footer text)": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue (body copy)": "hsl(207, 13%, 34%)",
        "very-dark-black-blue (footer background": "hsl(240, 10%, 16%)",
      },
      backgroundImage: {
        intro: "linear-gradient(135deg, #FF8F71 0%, #FF3E55 100%)",
        body: "linear-gradient(135deg, #2D2E40 0%, #3F4164 100%)",
      },
    },
  },
  plugins: [],
};
