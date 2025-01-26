/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0061FF",
          200: "#0061FF1A",
          300: "#0061FF0D",
        },
        accent: {
          100: "#E8ECF4",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#6B7280",
        },
        danger: "#F75555",
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        purpleColor: "#8B5DFF",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
