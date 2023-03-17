import Image from 'next/image'
import SectionHeader from './SectionHeader'

const WeeklySchedule = () => {
  return (
    <div className='mx-10'>
      <div className='text-center md:mb-8'>
        <SectionHeader text='Veckoschema' />
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2'>
        <Image
          src='/sasongsavslut-949x1024.jpg'
          alt=''
          width={500}
          height={500} />
        <Image
          src='/sasongsavslut-949x1024.jpg'
          alt=''
          width={500}
          height={500} />
        <Image
          src='/sasongsavslut-949x1024.jpg'
          alt=''
          width={500}
          height={500} />
      </div>
    </div>
  )
}

export default WeeklySchedule 
