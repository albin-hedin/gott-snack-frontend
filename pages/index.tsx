import Divider from '@/components/Divider'
import Events from '@/components/Events'
import ListenLive from '@/components/ListenLive'
import SupportUs from '@/components/SupportUs'
import WeeklySchedule from '@/components/WeeklySchedule'

const Home = () => {
  return (
    <>
      <div className='text-center text-white' style={{
        background: 'url(/background-startpage.jpg)',
        display: 'inline-block',
        width: '100%',
        aspectRatio: '1536/674',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      }}>
        <h1 className='lg:text-6xl md:text-4xl text-xl lg:mt-5 md:mt-3 mt-2 start-page-title'>
          Gott snack morgonradio
        </h1>
      </div>
      <Divider className='my-8 mx-64' />
      <ListenLive />
      <Divider className='my-8 mx-64' />
      <SupportUs />
      <Divider className='my-8 mx-64' />
      <WeeklySchedule />
      <Divider className='my-8 mx-64' />
      <Events />
    </>
  )
}

export default Home 
