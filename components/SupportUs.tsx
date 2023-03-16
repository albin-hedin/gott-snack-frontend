import Image from 'next/image'

const SupportUs = () => {
  return (
    <div className='my-10 mx-10 text-center flex flex-col items-center'>
      <h1 className='lg:text-5xl md:text-3xl sm:text-sm lg:mt-5 md:mt-5  xs:mt-0 roboto-font mb-5'>
        Stötta oss
      </h1>
      <div className='lg:text-2xl md:text-2xl sm:text-sm lg:mt-5 md:mt-5  xs:mt-0 font-sans mb-5 text-xs'>
        Som Patron får du varje vardag hela sändningen på två timmar ca 30 minuter efter att den är avslutad 10:00.
      </div>
      <div className='mb-10' style={{
        backgroundPosition: 'center',
        display: 'inline-block',
      }}>
        <a href="https://www.patreon.com/gottsnack/" target='_blank'>
          <Image
            className='rounded-3xl'
            src='/patreon.png'
            alt=''
            width={100}
            height={200} />
        </a>
      </div>
      <div className='grid grid-cols-3 gap-4' style={{
        display: 'inline-block',
        backgroundPosition: 'center',
      }}>
        <Image
          src='/Gruppbild_bred.jpg'
          alt=''
          width={1500}
          height={5000} />
      </div>
    </div>
  )
}

export default SupportUs 
