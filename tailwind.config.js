/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "2000px" },
        "md-h": { raw: "(min-height: 600px)" },
        "lg-h": { raw: "(min-height: 768px)" },
        "xl-h": { raw: "(min-height: 800px)" },
        "xl-h2": { raw: "(min-height: 864px)" },
        "xl-h3": { raw: "(min-height: 900px)" },
        "2xl-h": { raw: "(min-height: 1080px)" },
        "2xl-h1": { raw: "(min-height: 1024px)" },
        "2xl-h2": { raw: "(min-height: 1440px)" },
        "2xl-h3": { raw: "(min-height: 1200px)" },
        "d-h": { raw: "(max-height: 860px)" },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(70%)" },
          "100%": { transform: "translateX(-70%)" },
        },
      },
    },
  },
  plugins: [],
};
