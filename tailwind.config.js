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
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
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
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "focus-within"],
    borderColor: ["responsive", "hover", "focus", "focus-within"]
  },
  plugins: []
};
