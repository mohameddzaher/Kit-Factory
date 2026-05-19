import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#0f1115',
          dark: '#161a22',
          navy: '#1a1f2e',
          cream: '#f6f7f8',
          white: '#ffffff',
          muted: '#8a93a4',
          // legacy compat (still referenced in older components)
          cyan: '#00AEEF',
          'cyan-light': '#6cd2f5',
          mauve: '#CC00CC',
          'mauve-light': '#e06be0',
        },
        kf: {
          green: '#61D049',
          yellow: '#F8C500',
          red: '#DF0000',
          blue: '#00AEEF',
          magenta: '#CC00CC',
        },
      },
      fontFamily: {
        sans: ['var(--font-dubai)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dubai)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-dubai)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.22,1,0.36,1)',
        'fade-in': 'fadeIn 0.6s ease-out',
        'match-cut': 'matchCut 0.9s cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        matchCut: {
          '0%': { opacity: '0', transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'kf-gradient':
          'linear-gradient(135deg, #00AEEF 0%, #61D049 25%, #F8C500 50%, #DF0000 75%, #CC00CC 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
