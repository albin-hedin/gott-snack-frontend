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

  const setPicModalVisable = (
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
      <div className='mb-4'>
        <div className='text-center flex flex-col items-center' style={{
          backgroundColor: '#282828'
        }}>
          <div
            className='mt-2 font-semibold'>
          </div>
          <div className='lg:text-lg md:text-sm font-sans mt-2 text-xs text-white'>
            Gott snack har sommarlov. Livesändningar tillbaka i augusti. Sommaravsnitt släpps varje vecka (i sin helhet för 50 kr Patreons)
          </div>
          <div className='grid grid-cols-1'>
            <button className='mb-6'>
            </button>
          </div>
        </div>
      </div>
      <ListenLive
        handlePicModalClick={setPicModalVisable}
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
        handlePicModalClick={setPicModalVisable}
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
