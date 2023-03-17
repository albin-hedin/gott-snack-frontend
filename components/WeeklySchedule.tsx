import Image from 'next/image'

const WeeklySchedule = () => {
  return (
    <div className='mx-10'>
      <h1 style={{
        color: 'rgb(116, 114, 114)'
      }} className='lg:text-5xl md:text-3xl sm:text-sm roboto-font text-center mb-5'>
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
