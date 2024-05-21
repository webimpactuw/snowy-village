/** @type {import('tailwindcss').Config} */

const colorNames = {
  aquamarine_blue: "#00729D",
  dark_navy: "#222a39",
  faded_blue: "#97c5d6",
  grey: "#536271",
  green_grey: "#738b86",
  light_blue: "#F5FAFF",
  ice_blue: "#E8F4FF",
  white: "#ebebeb",
  sage_green: "#4b6858",
  dark_green: "#3c4b34",
  dark_blue: "#303d55",
  beige: "#FAF9F6",
};

export default {
  content: [
    "./src/pages/**/*.{html,js,ts,tsx}",
    "./src/components/**/*.{html,js,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "background-color": colorNames.ice_blue,
        "nav-color": colorNames.faded_blue,
        "text-color-1": colorNames.dark_navy,
        "text-color-2": colorNames.white,
        "highlight-color": colorNames.sage_green,
        "dark-navy": colorNames.dark_navy,
        "faded-blue": colorNames.faded_blue,
        grey: colorNames.grey,
        "green-grey": colorNames.green_grey,
        "light-blue": colorNames.light_blue,
        "ice-blue": colorNames.ice_blue,
        white: colorNames.white,
        "sage-green": colorNames.sage_green,
        "dark-green": colorNames.dark_green,
        "dark-blue": colorNames.dark_blue,
        gold: colorNames.gold,
        "aquamarine-blue": colorNames.aquamarine_blue,
        beige: colorNames.beige,
      },
      fontFamily: {
        "fjalla-one": ["Fjalla One", "sans-serif"],
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
        sans: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink 1.5s infinite",
      },
    },
  },
};
