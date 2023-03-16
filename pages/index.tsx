import Divider from '@/components/Divider'
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
        <h1 className='lg:text-5xl md:text-3xl sm:text-sm lg:mt-5 md:mt-5  xs:mt-0 start-page-title'>
          GRÄNSLÖS MORGONRADIO
        </h1>
        <h2 className='lg:text-3xl md:text-2xl sm:text-sm lg:mt-5 md:mt-5  xs:mt-0 font-sans'>
          Live alla vardagar mellan 8 och 10
        </h2>
        <a href="https://gott-snack.mixlr.com/" target='_blank'>
          <button className='bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-xl mt-5'>
            Lyssna live
          </button>
        </a>
      </div>
      <WeeklySchedule />
      <Divider className='my-8 mx-64' />
      <SupportUs />
    </>

  )
}

export default Home 
