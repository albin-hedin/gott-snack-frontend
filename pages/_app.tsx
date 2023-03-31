import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Gott snack morgonradio
        </title>
        {/* !-- Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-6NW5E5W6BV`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag(‘js’, new Date());
    gtag(‘config’, ‘G-6NW5E5W6BV,{
        page_path: window.location.pathname,
      }) `,
          }}
        />
      </Head>

      <div className='flex flex-col min-h-screen'>
        <Header />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Footer />
      </div>
    </>

  )
}
