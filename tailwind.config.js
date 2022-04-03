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
  darkMode: "class",
  theme: {
    colors: {
      gold: "#AC9E7B",
      bone: "#F6F1DD",
      brown: "#231F20",
      green: "#1E292B",
    },
    fontFamily: {
      serif: ["Gelasio", "serif"],
      sans: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        fox_d: "2px 10px 10px -5px rgba(30, 41, 43, 0.5)",
        fox_l: "2px 10px 10px -5px rgba(172,158,123, 0.25)",

        backgroundColor: ["checked"],
        borderColor: ["checked"],
        inset: ["checked"],
        zIndex: ["hover", "active"],
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      borderRadius: {
        foxsm: "6px",
        foxlg: "12px",
      },
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
