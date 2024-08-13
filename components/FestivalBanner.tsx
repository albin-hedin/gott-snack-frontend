import Link from 'next/link'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const FestivalBanner = () => {
  return (
    <>
      <div className={`text-center flex flex-col items-center md:festival-bg-image festival-bg-image-small`}>
        <div
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
          className='mt-2 font-semibold'>
          <SectionHeader text='Gott snack festival' />
        </div>
        <span className='text-white lg:text-2xl md:text-lg text-sm '>Tack för i år älskade ni!! Vi återkommer snart med information om nästa festival 2025</span>
        <div style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }} className='lg:text-2xl md:text-2xl font-sans mb-4 text-sm text-white'>
        </div>
        {/* <div className='grid grid-cols-2 md:gap-6 gap-2'> */}
        <div className=''>
          <button className='mb-6'>
            <Link href="/festival#top" >
              <div className='patreon-button rounded-xl link flex justify-between px-4 py-3 items-center gap-1'>
                <span className='text-white text-lg roboto-font font-bold'>
                  Läs mer
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
          {/* <button className='mb-6'>
            <Link href='https://billetto.se/e/gott-snack-festival-biljetter-969436?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1' target='_blank'>
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
          </button> */}
        </div>
      </div>
    </>
  )
}

export default FestivalBanner 
