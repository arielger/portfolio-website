import { Inter } from '@next/font/google';
import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const inter = Inter({ subsets: ['latin'] });

const theme = extendTheme(
  {
    fonts: {
      body: `${inter.style.fontFamily}, sans-serif`,
      heading: `${inter.style.fontFamily}, sans-serif`,
      mono: 'Menlo, monospace',
    },
  },
  withProse({
    // Fix back-ticks on code blocks
    baseStyle: {
      code: {
        '&::before, &::after': {
          content: '""',
        },
      },
    },
  }),
);

export default theme;
