/** @type {import('tailwindcss').Config} */


export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'twPurple': "#4C5FD5",
            'twGrey': '#dadbf1',
        },
        font: {
            sans: [
                "GT America Standard", 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

  module.exports = {
    prefix: 'tw-'
  }