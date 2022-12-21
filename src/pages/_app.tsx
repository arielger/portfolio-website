import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/Header';
import theme from '@/styles/theme';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
