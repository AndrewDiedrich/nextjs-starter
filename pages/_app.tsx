import Head from 'next/head'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS-Start</title>
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
    )
}
