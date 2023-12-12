import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    colors: {
      black: '#000',
      gray: {
        300: ' #D1D5DB',
        500: ' #6B7280',
        600: ' #4B5563',
        700: ' #374151',
        900: '#111827',
      },
      indigo: {
        400: '#818CF8',
        500: '#6366F1',
      },
      red: {
        500: '#ef4444',
      },
      white: '#fff',
    },
    extend: {
      backgroundImage: {
        illustration: "url('/public/illustration.png)",
      },
    },
  },
}
export default config
