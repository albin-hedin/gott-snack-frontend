import LargeHeader from '@/components/LargeHeader'
import ImageWithTitle from '@/components/ImageWithTitle'

const JesperAbout = () => {
  return (
    <div id='top' className='flex flex-col items-center'>
      <div className='text-center mb-10'>
        <LargeHeader headerText='Max Söderholm' />
        <div className='px-44'>
          Max Söderholm, bror till Fredrik, från Stockholm sidekickar i programmet. Han jobbar även på SL men extraknäcker inte som personlig kundservice! Max är även basist i Division 7.
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        backgroundPosition: 'center',
      }}>
      <ImageWithTitle
        title=''
        picUrl='/portraits/MAX-1-kopia-732x1024.jpg' />
      </div></div>
  )
}

export default JesperAbout