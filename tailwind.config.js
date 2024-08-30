// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#151c2c',
        soft: '#182237',
        white: '#ffffff',
        gray: '#b7bac1',
        grayHover: '#334155',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      apply: ['hover', 'focus'], // Apply styles on hover and focus
    },
  },
  corePlugins: {
    // ... core plugins ...
    'table-layout': false, // Disable default table-layout for customization
  },

  theme: {
    extend: {
      // ... other extensions ...
      apply: {
        'td-styles': {
          padding: '10px',
        },
      },
      colors: {
        primary: '#151c2c',
        soft: '#182237',
        white: '#ffffff',
        gray: '#b7bac1',
        grayHover: '#334155',
      },
    },
  },
}
