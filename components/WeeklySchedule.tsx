import Image from 'next/image'

const WeeklySchedule = () => {
  return (
    <div className='my-10 mx-10'>
       <h1 className='lg:text-5xl md:text-3xl sm:text-sm lg:mt-5 md:mt-5  xs:mt-0 roboto-font text-center mb-5'>
          Veckoschema
        </h1>
      <div className='grid grid-cols-3 gap-4'>
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
