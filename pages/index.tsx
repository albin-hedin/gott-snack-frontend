import Divider from '@/components/Divider'
import ListenLive from '@/components/ListenLive'
import SupportUs from '@/components/SupportUs'
import WeeklySchedule from '@/components/WeeklySchedule'

const Home = () => {
  return (
    <>
      <div className='text-center' style={{
        background: 'url(/background-startpage.jpg)',
        display: 'inline-block',
        width: '100%',
        aspectRatio: '1536/674',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      }}>
        <h1 className='lg:text-5xl md:text-3xl sm:text-sm lg:mt-5 md:mt-3  xs:mt-1 start-page-title'>
          GRÄNSLÖS MORGONRADIO
        </h1>
        <h2 className='lg:text-3xl md:text-sm sm:text-xs lg:mt-0 md:mt-1  xs:mt-0 font-sans'>
          Live alla vardagar mellan 8 och 10
        </h2>
      </div>
      <Divider className='my-8 mx-64' />
      <ListenLive />
      <Divider className='my-8 mx-64' />
      <SupportUs />
      <Divider className='my-8 mx-64' />
      <WeeklySchedule />
      <Divider className='my-8 mx-64' />
    </>
  )
}

export default Home 
