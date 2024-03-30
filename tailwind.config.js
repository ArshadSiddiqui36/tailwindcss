/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // content: ["*.html"],
  // content: ["./index.html"],
  theme: {
    screens: {
      ms: "320px",
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};

// =================================

// screens: {
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '768px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }

//   '2xl': '1536px',
//   // => @media (min-width: 1536px) { ... }
// }

// =================================

// screens: {
//   tablet: "640px",
//   // => @media (min-width: 640px) { ... }

//   laptop: "1024px",
//   // => @media (min-width: 1024px) { ... }

//   desktop: "1280px",
//   // => @media (min-width: 1280px) { ... }

//   ms: "320px",
//   xs: "360px",
//   sm: "640px",
//   md: "768px",
//   lg: "1024px",
//   xl: "1280px",
//   "2xl": "1536px",
// },

// =================================

// extend: {
//   spacing: {
//     "8xl": "96rem",
//     "9xl": "128rem",
//   },
//   borderRadius: {
//     "4xl": "2rem",
//   },
// },

// =================================

// plugins: [
//   require('@tailwindcss/forms'),
//   require('@tailwindcss/aspect-ratio'),
//   require('@tailwindcss/typography'),
//   require('tailwindcss-children'),
// ],
