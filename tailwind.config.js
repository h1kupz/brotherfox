module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      gold: "#AC9E7B",
      bone: "#F6F1DD",
      brown: "#231F20",
    },
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        fox_d: "2px 10px 10px -5px rgba(35, 31, 32, 0.5)",
        fox_l: "2px 10px 10px -5px rgba(172,158,123, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      borderRadius: {
        foxsm: "6px",
        foxlg: "12px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
