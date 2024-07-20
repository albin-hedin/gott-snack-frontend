import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import Footer from '@/components/Footer'
import SiteHeader from '@/components/SiteHeader'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Gott snack morgonradio
        </title>
      </Head>
      <meta name="description" content="Gott snack morgonradio är en podd som sänds live kl 08:00-10:00. Vi pratar om allt mellan himmel och jord och spelar musik som får dig att vakna till liv. Välkommen att lyssna! Gott Snack grundades av Fredrik Geniet Söderholm år 2020. Projektet drogs igång med ambitionen att sända ofiltrerad och gränslös morgonradio – på Geniets sätt." />
      {/* !-- Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6NW5E5W6BV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6NW5E5W6BV');
        `}
      </Script>
      <div className='flex flex-col min-h-screen'>
        <SiteHeader />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Footer />
      </div>
    </>

  )
}
