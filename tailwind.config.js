module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
    },
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        purple: "#3B27C1",
        yellow: "#BAFF36",
        greyLight: "#ECECEC",
        greyDark: "#2C2C2C",
        dark: "#0F0F0F",
      },
      backgroundImage: {
        home: 'url("/images/bg-home.jpg")',
      },
      boxShadow: {
        navbar: "0px 6px 10px rgba(0, 0, 0, 0.25)",
      },
      lineHeight: {
        hero: "4.5rem",
      },
      gridTemplateRows: {},
      gridRow: {},
    },
    screens: {
      mobile: "160px",
      tablet: "500px",
      miniipad: "768px",
      ipad: "925px",
      desktop: "1170px",
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
    translate: true,
    transform: true,
    stroke: true,
  },
};
