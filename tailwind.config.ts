import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        panel: {
          bg: '#f4f4f3',
          navy: '#0b1129',
          coral: '#f57f5f',
          magenta: '#ef4ea7',
          muted: '#d7d7d4'
        }
      },
      boxShadow: {
        card: '0 20px 45px rgba(10, 16, 39, 0.08)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};

export default config;
