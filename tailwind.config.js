import utils from 'smelte/src/utils/style';
import buildPalette from 'smelte/src/utils/color';

// TOKENS //
import { darkMode, darkVariants } from '~/smelte';
import { defaultColors, white, black, gray } from '~/colors';
import { fontSize, lineHeight } from '~/typography';
import { width, breakpoints } from '~/spacing';

export default {
  // Build Tailwind config for Smelte using TOKENS
  variants: darkMode ? darkVariants : {},
  theme: {
    extend: { width },
    fontSize,
    breakpoints,
    lineHeight,
    colors: {
      transparent: 'transparent',
      ...white,
      ...black,
      ...buildPalette(defaultColors),
      gray,
    },
  },

  // Tailwind plugins for Smelte
  plugins: [
    function ({ addUtilities }) {
      return addUtilities({
        ['.border-box']: {
          boxSizing: 'border-box',
        },
        ['.content-box']: {
          boxSizing: 'content-box',
        },
      });
    },
    utils.addUtility({
      prop: 'caret-color',
      className: '.caret',
    }),
    utils.addUtility({
      prop: 'stroke',
      className: '.stroke',
    }),
    darkMode &&
      function ({ addVariant, e }) {
        const d = '.mode-dark';

        addVariant('dark', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${d} .${e(`dark${separator}${className}`)}`;
          });
        });

        addVariant('dark-hover', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${d} .${e(`dark-hover${separator}${className}`)}:hover`;
          });
        });

        addVariant('dark-focus', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${d} .${e(`dark-focus${separator}${className}`)}:focus`;
          });
        });

        addVariant('dark-active', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${d} .${e(`dark-active${separator}${className}`)}:active`;
          });
        });
      },
  ],
};
