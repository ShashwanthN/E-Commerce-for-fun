/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'bgPrimary': '#0d1117',
      'bgSecondary': '#161b22',
      'bglighter': '#14181e',
      'textPrimary': '#e6edf3',
      'textSecondary': '#848d97',
      'white':'#ffffff',
      'bgTertiary':'#283041',
      'BorderCol':'#57606a',
      'divider': '#30363d'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}