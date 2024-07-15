/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        body: ['Inter'],
        title: ['Satoshi']
      },
      colors: {
        primary: '#003171',
        secondary: '#888eba',
        accent: '#6B21A8',
        white: '#ffffff',
        'accent-one': '#9333EA',
        'text-light': '#64748b',
        'text-dark': '#475569',
        light: '#f7f8ff',
        'dark-light': '#f1f1e6'
      },
    },
  },
  plugins: [],
}

