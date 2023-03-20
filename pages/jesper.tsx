import LargeHeader from '@/components/LargeHeader'
import Image from 'next/image'

const JesperAbout = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center mb-10'>
        <LargeHeader headerText='Jesper Ekstedt' />
        <div className='px-44'>
          Juriststudent från Stockholm, sidekickar i programmet. Jesper briljerar med sina kunskaper om det mesta och bjuder ofta på topplistor med blandat innehåll
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        backgroundPosition: 'center',
      }}>
        <Image
        className='rounded-lg'
          src='/jesper.jpg'
          alt=''
          width={300}
          height={300} />
      </div></div>
  )
}

export default JesperAbout