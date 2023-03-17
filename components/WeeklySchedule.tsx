import Image from 'next/image'

const WeeklySchedule = () => {
  return (
    <div className='mx-10'>
      <h1 style={{
        color: 'rgb(116, 114, 114)'
      }} className='lg:text-3xl md:text-2xl text-2xl roboto-font text-center mb-5'>
        Veckoschema
      </h1>
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
