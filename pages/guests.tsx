import Head from 'next/head'
import ImageWithTitle from '@/components/ImageWithTitle'
import LargeHeader from '@/components/LargeHeader'
import guestQuotes from '../guestQuotes.json';
import type { GuestQuote } from '@/types/guestQuote';

const hiddenPicUrls = [
  '/portraits/JESPER-kopia-1097x1536.jpg',
  '/portraits/question.jpg',
]

const nameOverrides: Record<string, string> = {
  '/portraits/konstab.jpg': 'KonstAB',
}

const uniqueGuests: GuestQuote[] = [...new Map(guestQuotes.map((quote) => [quote.picUrl, quote])).values()]
  .filter(quote => !hiddenPicUrls.includes(quote.picUrl))
  .map(quote => ({ ...quote, name: nameOverrides[quote.picUrl] ?? quote.name }))

const Guests = () => {
  return (
    <div className='mx-3 lg:mx-50'>
      <Head>
        <title>Gäster vi minns | Gott snack</title>
        <meta name="description" key="description" content="Gäster och citat vi minns från Gott snack." />
        <meta property="og:title" key="og:title" content="Gäster vi minns | Gott snack" />
      </Head>
      <div id='top'>
      </div>
      <div className='text-center'>
        <LargeHeader blackText headerText='Gäster vi minns' />
        <div className='
      flex 
      flex-wrap
      gap-4
      justify-center
      items-center
      mx-auto max-w-[1200px]
      px-1'>
          {uniqueGuests.map((quote) =>
            <div
              key={quote.picUrl}
              className='
              mx-2
              md:my-8
              my-2'>
              <h2 className={`
              text-center
              lg:text-3xl
              md:text-2xl
              text-lg
              font-fredoka`
              }>
                {quote.name}
              </h2>
              <i
                className='inline-flex' >
                <blockquote className='
                md:text-lg
                text-sm
                roboto-font
                text-black
                max-w-xs'>
                  {quote.text}
                </blockquote>
              </i>
              <div className='flex flex-col items-center mt-2'>
                <ImageWithTitle
                  imageSux
                  picUrl={quote.picUrl}
                  alt={quote.name} />
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Guests 
