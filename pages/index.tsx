import AwayBanner from '@/components/AwayBanner'
import FestivalBanner from '@/components/FestivalBanner'
import Gottsnackteam from '@/components/GottSnackTeam'
import ListenLive from '@/components/ListenLive'
import AboutModal from '@/components/modals/AboutModal'
import PicModal from '@/components/modals/PicModal'
import RandomQuote from '@/components/RandomQuote'
import SupportUs from '@/components/SupportUs'
import { useState } from 'react'

const Home = () => {
  const [picModalOpen, setPicModalOpen] = useState(false);
  const [picModalPicUrl, setPicModalPicUrl] = useState('');
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [aboutModalCoworker, setAboutModalCoworker] = useState('');
  const [aboutModalInstaUrl, setAboutModalInstaUrl] = useState('');

  const setPicModalVisible = (
    isOpen: boolean,
    picUrl: string): void => {
    setPicModalOpen(isOpen)
    setPicModalPicUrl(picUrl)
  }

  const handleAboutModalClick = (
    isOpen: boolean,
    coWorker?: string,
    instaUrl?: string): void => {
    setAboutModalOpen(isOpen)
    setAboutModalCoworker(coWorker ?? '')
    setAboutModalInstaUrl(instaUrl ?? '')
  }

  return (
    <>
      {/* <div className='mb-10'>
        <AwayBanner />
      </div> */}
      {/* <div className='mb-10'>
        <MovieBanner />
      </div> */}
      <div className='mb-10'>
        <FestivalBanner />
      </div>
      <ListenLive
        handlePicModalClick={setPicModalVisible}
      />
      <RandomQuote />
      <div className='mt-10'>
        <SupportUs />
      </div>
      <div className='mt-10'>
        <Gottsnackteam
          handleModalClick={handleAboutModalClick} />
      </div>
      <PicModal
        handlePicModalClick={setPicModalVisible}
        modalVisable={picModalOpen}
        imageUrl={picModalPicUrl} />
      <AboutModal
        modalVisable={aboutModalOpen}
        handleModalClick={handleAboutModalClick}
        coWorker={aboutModalCoworker}
        instaProfileUrl={aboutModalInstaUrl}
      />
    </>
  )
}

export default Home
