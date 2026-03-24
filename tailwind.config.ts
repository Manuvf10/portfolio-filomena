import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0f10',
        olive: '#57581C',
        stone: '#F5F2EC',
        mist: '#ECE8DF',
        cloud: '#D8D3CA'
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 14px 34px rgba(15,15,16,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
