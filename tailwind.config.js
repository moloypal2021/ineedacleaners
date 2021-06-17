module.exports = {
  mode: "jit",
  purge: {
    enabled: false,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          10: "#F9F9F9",
          20: "#EDEDED",
        },
        dark: {
          10: "#464646",
          20: "#232323",
          30: "#414141",
        },
        blue: {
          10: "#1654A1",
        },
        green: {
          10: "#86C76D",
        },
      },
      boxShadow: {
        10: "7px 7px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        10: "7px 7px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
