/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
      colors: {
        custommustard: "#f6ca94",
        custompink: "#f09ea7",
        customyellow: "#fafabe",
        customgreen: "#c1ebc0",
        customindigo: "#c7caff",
        custompurple: "#cdabeb",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
   
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      xmd: "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
   
    
  },
  plugins: [require("daisyui")],
};
