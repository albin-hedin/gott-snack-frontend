import ImageWithTitle from '@/components/ImageWithTitle'
import LargeHeader from '@/components/LargeHeader'
import guestQuotes from '../guestQuotes.json';

const Guests = () => {
  const renderGuests = (): JSX.Element[] => {
    const uniqueGuestQuotes: {
      text: string;
      picUrl: string;
      name: string;
    }[] = [...new Map(guestQuotes.map((quote: any) => [quote['picUrl'], quote])).values()]

    const uniqueGuestQuotesReduced = uniqueGuestQuotes
      .filter(quote => quote.picUrl !== '/portraits/JESPER-kopia-1097x1536.jpg')
      .filter(quote => quote.picUrl !== '/portraits/question.jpg')

    uniqueGuestQuotes.forEach(quote => {
      if (quote.picUrl === '/portraits/konstab.jpg') {
        quote.name = 'KonstAB'
      }
    })

    return uniqueGuestQuotesReduced.map((quote: {
      text: string;
      picUrl: string;
      name: string;
    }) =>
      <>
        <div className='mx-2'>
          <div
            style={{
              minHeight: '56px'
            }}
            className='
            text-center
            mt-2
            md:mt-2'></div>
          <h1 className={`
          text-center
          lg:text-3xl
          md:text-2xl
          text-lg
          font-fredoka`
          }>
            {quote.name}
          </h1>
          <i
            className='inline-flex' >
            <blockquote className='
            md:text-lg
            text-sm
            roboto-font
            text-black
            max-w-xs'>
              {`${quote.text}`}
            </blockquote>
          </i>
          <div className='flex flex-col items-center mt-2'>
            <ImageWithTitle
              imageSux
              picUrl={quote.picUrl} />
          </div>
        </div>
      </>)
  }

  return (
    <div className='mx-3 lg:mx-52'>
      <div id='top'>
      </div>
      <div className='text-center'>
        <LargeHeader headerText='Gäster vi minns' />
      </div>
      <div className='
      flex 
      flex-wrap
      gap-4
      justify-center
      items-center
      mx-auto max-w-[1200px]
      px-1'>
        {renderGuests()}
      </div>
    </div>
  )
}

export default Guests 
