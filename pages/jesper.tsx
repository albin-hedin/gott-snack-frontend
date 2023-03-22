import LargeHeader from '@/components/LargeHeader'
import ImageWithTitle from '@/components/ImageWithTitle'

const JesperAbout = () => {
  return (
    <div id='top' className='flex flex-col items-center'>
      <div className='text-center mb-10'>
        <LargeHeader headerText='Jesper Ekstedt' />
        <div className='md:px-44 px-4'>
          Juriststudent från Stockholm, sidekickar i programmet. Jesper briljerar med sina kunskaper om det mesta och bjuder ofta på topplistor med blandat innehåll
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        backgroundPosition: 'center',
      }}>
   <ImageWithTitle
        title=''
        picUrl='/portraits/JESPER-kopia-1097x1536.jpg' />
      </div></div>
  )
}

export default JesperAbout