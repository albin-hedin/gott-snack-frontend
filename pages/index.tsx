import Gottsnackteam from '@/components/GottSnackTeam'
import ListenLive from '@/components/ListenLive'
import RandomQuote from '@/components/RandomQuote'
import SupportUs from '@/components/SupportUs'

const Home = () => {
  return (
    <>
      <ListenLive />
      <RandomQuote />
      <div className='mt-10'>
        <SupportUs />
      </div>
      <div className='mt-10'>
        <Gottsnackteam />
      </div>
    </>
  )
}

export default Home 
