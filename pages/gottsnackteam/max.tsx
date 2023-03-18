import LargeHeader from '@/components/LargeHeader'
import Image from 'next/image'

const JesperAbout = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center mb-10'>
        <LargeHeader headerText='Max Söderholm' />
        <div className='px-44'>
          Max Söderholm, bror till Fredrik, från Stockholm sidekickar i programmet. Han jobbar även på SL men extraknäcker inte som personlig kundservice! Max är även basist i Division 7.
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        backgroundPosition: 'center',
      }}>
        <Image
          className='rounded-lg'
          src='/max.jpg'
          alt=''
          width={300}
          height={300} />
      </div></div>
  )
}

export default JesperAbout