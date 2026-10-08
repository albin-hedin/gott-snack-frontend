import { useEffect, useState } from 'react'
import ImageWithTitle from './ImageWithTitle';
import guestQuotes from '../guestQuotes.json';
import CtaLink from './CtaLink';
import type { GuestQuote } from '@/types/guestQuote';

const getRandomQuote = (): GuestQuote =>
  guestQuotes[Math.floor(Math.random() * guestQuotes.length)];

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<GuestQuote | null>(null);

  useEffect(() => {
    // Pick the first quote after mount so server and client markup match
    const showRandomQuote = () => setCurrentQuote(getRandomQuote())
    const initial = setTimeout(showRandomQuote, 0)
    const interval = setInterval(showRandomQuote, 5000)
    return () => {
      clearTimeout(initial)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='
    mx-5
    text-center
    flex
    flex-col
    items-center'>
      <div
        style={{
          minHeight: '56px'
        }}
        className='text-center
       mt-10
       md:mt-10'>
        <i
          className='inline-flex' >
          <blockquote className='md:text-2xl text-lg roboto-font text-black'>
            {currentQuote && `${currentQuote.text}${currentQuote.name ? ` - ${currentQuote.name}` : ''}`}
          </blockquote>
        </i>
        <div className='flex flex-col items-center mt-2'>
          {currentQuote ? (
            <ImageWithTitle
              imageSux
              picUrl={currentQuote.picUrl}
              alt={currentQuote.name} />
          ) : (
            <div className='w-[165px] h-[231px] md:w-[195px] md:h-[273px] mt-1' />
          )}
        </div>
      </div>
      <div className='mt-3'>
        <CtaLink href="/guests#top" text="Gäster vi minns" />
      </div>
    </div>
  )
}

export default RandomQuote
