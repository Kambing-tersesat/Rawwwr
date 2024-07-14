/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      'sans': ['montserrat', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ["Open Sans",],
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["valentine"],
  },
}

