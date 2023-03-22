import '@/styles/globals.css'
import '@/styles/reset.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head> 
      <Component {...pageProps} />
    </>
  )
}
