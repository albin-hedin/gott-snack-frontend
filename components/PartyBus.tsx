import Link from 'next/link'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const PartyBus = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center' style={{
        backgroundColor: '#7a5df5'
      }}>
        <div className='mt-2'>
          <SectionHeader text='Partybuss till Way Out West' />
        </div>
        <div className='lg:text-2xl md:text-2xl sm:text-sm font-sans mb-5 text-xs text-white'>
          9 augusti 2023
        </div>
        <div className='grid grid-cols-1'>
          <button className='mb-6'>
            <Link
              target='_blank'
              href="https://facebook.com/events/s/gott-snacks-partybuss-till-way/193490956960461/" >
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
        </div>
      </div>
    </>
  )
}

export default PartyBus 
