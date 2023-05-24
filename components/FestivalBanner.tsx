import Link from 'next/link'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'

const FestivalBanner = () => {
  const renderBackgroundImageClass = () => {
    if (isMobile) {
      return {
        backgroundImage: 'url(/gs-festival-no-text.jpg)',
        backgroundPosition: '95% 44%',
        backgroundSize: '370px'
      }
    } else {
      return {
        backgroundImage: 'url(/gs-festival-no-text.jpg)',
        backgroundPosition: '100% 33.5%',
        backgroundSize: '1300px'
      }
    }
  }

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
        <div style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }} className='lg:text-2xl md:text-2xl font-sans mb-4 text-sm text-white'>
          5 augusti 2023
          <br />
          Gröndals båtklubb
          <br />
          Fri entré!
        </div>
        <div className='grid grid-cols-2 md:gap-6 gap-2'>
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
          <button className='mb-6'>
            <Link href='https://app.easyarr.se/arrangemang/Gottsnackfestival.html' target='_blank'>
              <div className='patreon-button rounded-xl link flex justify-between px-4 py-3 items-center gap-1'>
                <span className='text-white text-lg roboto-font font-bold'>
                  Stödbiljetter
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
      </div>
    </>
  )
}

export default FestivalBanner 
