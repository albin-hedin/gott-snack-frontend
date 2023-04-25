import Link from 'next/link'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const FestivalBanner = () => {
  return (
    <div className='text-center flex flex-col items-center' style={{
      backgroundColor: '#F69362'
    }}>
      <div className='mt-2'>
        <SectionHeader text='Gott snack festival' />
      </div>
      <div className='lg:text-2xl md:text-2xl sm:text-sm font-sans mb-5 text-xs text-white'>
        Stockholm saknar en MYSIG stadsfestival. Följ med på resan<br />  mot två magiska kvällar sommaren 2023.
        Fri entré!
      </div>
      <button className='mb-5'>
        <Link href="/festival#top" >
          <div className='patreon-button box-border rounded-xl link flex'>
            <span className='text-white text-lg roboto-font font-bold h-14 px-4 pt-3'>
              Läs mer
            </span>
            <div>
              <Image
                className='pt-4 pr-2'
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

export default FestivalBanner 
