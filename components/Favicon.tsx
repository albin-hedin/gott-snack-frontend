import type { JSX } from "react";
const Favicon = (): JSX.Element => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Gott snack" />
      <meta name="application-name" content="Gott snack" />
      <meta name="msapplication-TileColor" content="#0057ad" />
      <meta name="theme-color" content="#0057ad"></meta>
    </>
  )
}

export default Favicon
