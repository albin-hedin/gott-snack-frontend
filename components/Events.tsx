import Image from 'next/image'
import SectionHeader from './SectionHeader'

const Events = () => {
  return (
    <div className='mx-10'>
      <div className='text-center md:mb-8'>
        <SectionHeader text='Event' />
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2'>
        <Image
          src='/event1.jpg'
          alt=''
          width={500}
          height={500} />
        <Image
          src='/event2.jpg'
          alt=''
          width={500}
          height={500} />
        <Image
          src='/event3.jpg'
          alt=''
          width={500}
          height={500} />
      </div>
    </div>
  )
}

export default Events 
