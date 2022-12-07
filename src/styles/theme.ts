import { Inter } from '@next/font/google';
import { extendTheme } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

const theme = extendTheme({
  fonts: {
    body: `${inter.style.fontFamily}, sans-serif`,
    heading: `${inter.style.fontFamily}, sans-serif`,
    mono: 'Menlo, monospace',
  },
});

export default theme;
