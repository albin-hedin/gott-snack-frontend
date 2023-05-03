import Link from 'next/link'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const FestivalBanner = () => {
  return (
    <div className='text-center flex flex-col items-center' style={{
      backgroundColor: '#F69362'
    }}>
      <div
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
        className='mt-2'>
        <SectionHeader text='Gott snack festival' />
      </div>
      <div style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }} className='lg:text-2xl md:text-2xl font-sans mb-5 text-sm text-white'>
        Stockholm saknar en MYSIG stadsfestival.<br />  Följ med på resan mot en magisk kväll 5 augusti 2023.
        <br />
        Fri entré!
      </div>
      <div className='grid grid-cols-2 gap-6'>
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
  )
}

export default FestivalBanner 
