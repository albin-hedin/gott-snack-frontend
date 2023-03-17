import Image from 'next/image'

const Events = () => {
  return (
    <div className='mx-10'>
      <h1 style={{
        color: 'rgb(116, 114, 114)'
      }} className='lg:text-5xl md:text-3xl sm:text-sm roboto-font text-center mb-5'>
        Event
      </h1>
      <div className='grid grid-cols-3 gap-4'>
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
