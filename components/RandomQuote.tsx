import { useEffect, useState } from 'react'
import ImageWithTitle from './ImageWithTitle';
import guestQuotes from '../guestQuotes.json';
import Link from 'next/link';
import Image from 'next/image'

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<{
    text: string;
    picUrl: string;
    name: string;
  }>({ text: '', picUrl: '', name: '' });

  useEffect(() => {
    setNewRandomQuote()

    const interval = setInterval(() => setNewRandomQuote(), 5000)
    return () => { clearInterval(interval) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setNewRandomQuote = (): void => {
    const randomQuoteIndex: number = Math.floor(Math.random() * guestQuotes.length);
    setCurrentQuote(guestQuotes[randomQuoteIndex]);
  }

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
            {`${currentQuote.text} ${currentQuote.name ? ' -' : ''} ${currentQuote.name ? currentQuote.name : ''}`}
          </blockquote>
        </i>
        <div className='flex flex-col items-center mt-2'>
          <ImageWithTitle
            imageSux
            picUrl={currentQuote.picUrl} />
        </div>
      </div>
      <button className='mt-3'>
        <Link
          href="/guests#top" >
          <div className='patreon-button rounded-xl link flex justify-between px-4 py-3 items-center gap-1'>
            <span className='text-white text-lg roboto-font font-bold'>
              Alla citat
            </span>
            <div>
              <Image
                src='/icons8-chevron-right-30.png'
                alt=''
                width={25}
                height={25} />
            </div>
          </div>
        </Link>
      </button>
    </div>
  )
}

export default RandomQuote
