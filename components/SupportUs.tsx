import Image from 'next/image'
import PatreonButton from './PatreonButton'

const SupportUs = () => {
  return (
    <div className='mx-10 text-center flex flex-col items-center'>
      <h1 style={{
        color: 'rgb(116, 114, 114)'
      }} className='lg:text-5xl md:text-4xl text-2xl roboto-font mb-3'>
        Stötta oss
      </h1>
      <div className='lg:text-2xl md:text-2xl sm:text-sm font-sans mb-5 text-xs'>
        Som Patron får du varje vardag hela sändningen på två timmar ca 30 minuter efter att den är avslutad 10:00
      </div>
      <div className='mb-5'>
        <PatreonButton />
      </div>
      <div style={{
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