/** @type {import('tailwindcss').Config} */
const foundationColor = {
  "st-black": "#000000",
  "st-white": "#FFFFFF",
  "st-gray-10": "#0f0f0f",
  "st-gray-09": "#333333",
  "st-gray-08": "#3D3D3D",
  "st-gray-07": "#6F6F6F",
  "st-gray-06": "#8B8B8B",
  "st-gray-05": "#A5A5A5",
  "st-gray-04": "#C1C1C1",
  "st-gray-03": "#DFDFDF",
  "st-gray-02": "#F5F4F3",
  "st-gray-01": "#F7F7F7",
};
const semanticColos = {
  "active-orange": "#FF9C07",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "GothicA1-regular": "GothicA1-regular",
      },
      width: {
        390: "24rem",
      },
      height: {
        59: "4rem",
        90: "6rem",
      },
    },

    backgroundColor: {
      ...foundationColor,
      ...semanticColos,
    },
    colors: {
      ...foundationColor,
      ...semanticColos,
    },
  },
};
