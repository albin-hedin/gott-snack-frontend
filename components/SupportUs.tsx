import Image from 'next/image'
import PatreonButton from './PatreonButton'
import SectionHeader from './SectionHeader'

const SupportUs = () => {
  return (
    <div className='text-center flex flex-col items-center bg-slate-600'>
      <div className='mt-2'>
        <SectionHeader text='Stötta oss' />
      </div>
      <div className='lg:text-2xl md:text-2xl sm:text-sm font-sans mb-5 text-xs text-white'>
        Som Patron får du varje vardag hela sändningen på <br /> två timmar ca 30 minuter efter att den är avslutad 10:00
      </div>
      <div className='mb-5'>
        <PatreonButton />
      </div>
    </div>
  )
}

export default SupportUs 
