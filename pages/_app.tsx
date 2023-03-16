import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex&display=swap" rel="stylesheet" />
        <title>
          Gott snack radio
        </title>
      </Head>
      <div className='flex flex-col min-h-screen'>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Footer />
      </div>
    </>

  )
}
