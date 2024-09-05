module.exports = {
  content: ['./src/**/*.{html,js,mjs}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgb(239, 246, 255)',
          100: 'rgb(219, 234, 254)',
          200: 'rgb(191, 219, 254)',
          300: 'rgb(147, 197, 253)',
          400: 'rgb(96, 165, 250)',
          500: 'rgb(59, 130, 246)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
          800: 'rgb(30, 64, 175)',
          900: 'rgb(30, 58, 138)'
        },
        'brand-primary': 'rgb(37, 99, 235)',
        'default-font': 'rgb(23, 23, 23)',
        'subtext-color': 'rgb(115, 115, 115)',
        'neutral-border': 'rgb(229, 229, 229)',
        white: 'rgb(255, 255, 255)',
        'default-background': 'rgb(255, 255, 255)',
        'box-background': 'rgba(0, 0, 0, 0.5)',
        'box-border': 'rgba(255, 255, 255, 0.3)',
        tools: 'rgba(255, 255, 255, 0.1)'
      },
      fontSize: {
        body: [
          '1.13rem',
          {
            lineHeight: '1.5',
            fontWeight: '400'
          }
        ],
        'heading-1': [
          '3.36rem',
          {
            lineHeight: '1.125',
            fontWeight: '700'
          }
        ],
        'heading-2': [
          '2.8rem',
          {
            lineHeight: '1.25',
            fontWeight: '700'
          }
        ],
        'heading-3': [
          '2.33rem',
          {
            lineHeight: '1.25',
            fontWeight: '500'
          }
        ],
        'heading-4': [
          '1.94rem',
          {
            lineHeight: '1.25',
            fontWeight: '700'
          }
        ],
        'heading-5': [
          '1.62rem',
          {
            lineHeight: '1.25',
            fontWeight: '700'
          }
        ],
        'heading-6': [
          '1.25rem',
          {
            lineHeight: '1.25',
            fontWeight: '700'
          }
        ],
        small: [
          '0.78rem',
          {
            lineHeight: '1.5',
            fontWeight: '700'
          }
        ]
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        default: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        overlay: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
        knowledge: '0px -40px 50px rgb(37, 99, 235);'
      }
    }
  },
  plugins: []
};
