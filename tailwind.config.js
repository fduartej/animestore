/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Add paths to all your HTML, JS, or JSX files
  ],
  theme: {
    extend: {
      // Customizations go here
      colors: {
        primary: "#1D4ED8", // Example custom color
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Example custom font family
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
  ],
};
