const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      dark: { raw: "(prefers-color-scheme: dark)" },
      xs: "448px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem"
    },
    extend: {
      fontFamily: {
        display: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      scale: {
        "99": ".99",
        "101": "1.01"
      },
      spacing: {
        "7": "1.75rem",
        "9": "2.25rem",
        "14": "3.5rem",
        "18": "4.5rem",
        "30": "7.5rem",
        "36": "9rem",
        "53px": "53px"
      },
      translate: {
        "1/3": "33.333333333%",
        "2/3": "66.666666667%",
        "1/4": "25%",
        "3/4": "75%"
      }
    }
  },
  variants: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  plugins: []
};
