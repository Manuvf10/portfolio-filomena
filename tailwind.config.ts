import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        olive: '#57581C',
        stone: '#F4F1EA',
        mist: '#E8E5DE',
        cloud: '#D5D3CD'
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};

export default config;
