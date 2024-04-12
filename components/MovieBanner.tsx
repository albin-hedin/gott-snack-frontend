import Link from 'next/link'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const FestivalBanner = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center'
        style={{
          backgroundColor: '#282828'
        }}>
        <div>
          <Image
            src='/filmstaden.png'
            alt=''
            width={150}
            height={150} />
        </div>
        <div
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
          className='font-semibold'>
          <SectionHeader text='Gott Snack Live' />
        </div>
        <span className='text-white lg:text-2xl md:text-lg text-sm '>Premiär lördag 18 maj</span>
        <div style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }} className='lg:text-2xl md:text-2xl font-sans mb-4 text-sm text-white'>
        </div>
        <div >
          <button className='mb-6'>
            <Link href='https://www.filmstaden.se/film/gott-snack-live/?date=2024-05-18' target='_blank'>
              <div className='patreon-button rounded-xl link flex justify-between px-4 py-3 items-center gap-1'>
                <span className='text-white text-lg roboto-font font-bold'>
                  Biljetter
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
      </div >
    </>
  )
}

export default FestivalBanner