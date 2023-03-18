import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import Footer from '@/components/Footer'
import HamburgerMenu from '@/components/HamburgerMenu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Gott snack morgonradio
        </title>
      </Head>
      <div className='flex flex-col min-h-screen'>
        <MainLayout>
          <HamburgerMenu />
          <Component {...pageProps} />
        </MainLayout>
        <Footer />
      </div>
    </>

  )
}
