import "../styles/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import MainLayout from "../components/MainLayout";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gott snack</title>
        <meta
          name="description"
          content="Gott snack är en podd/radio som sänds live måndag till torsdag. Vi pratar om allt mellan himmel och jord och spelar musik som får dig att vakna till liv. Välkommen att lyssna! Gott Snack grundades av Fredrik Geniet Söderholm år 2020. Projektet drogs igång med ambitionen att sända ofiltrerad och gränslös radio – på Geniets sätt."
          key="description"
        />
        <meta property="og:site_name" content="Gott snack" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gott snack" key="og:title" />
        <meta property="og:image" content="/background-startpage.jpg" />
      </Head>
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
      <div
        className={`${display.variable} ${body.variable} font-sans text-ink flex flex-col min-h-screen`}
      >
        <SiteHeader />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Footer />
      </div>
    </>
  );
}
