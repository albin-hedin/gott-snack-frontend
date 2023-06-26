import Link from 'next/link'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const PartyBusBanner = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center' style={{
        backgroundColor: '#7964d1'
      }}>
        <div style={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
        }}
          className='mt-2 font-semibold'>
          <SectionHeader text='Partybuss till Way Out West' />
        </div>
        <div style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }} className='lg:text-2xl md:text-2xl font-sans mb-4 text-sm text-white'>
          9 augusti 2023
          <br />
          Gott snack bjuder in till den ultimata roadtripen
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

export default PartyBusBanner 
