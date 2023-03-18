import Image from 'next/image'
import MixlrPlayer from './MixlrPlayer'
import SectionHeader from './SectionHeader'

const ListenLive = () => {
  return (
    <div className='mx-10 text-center flex flex-col items-center'>
      <SectionHeader text='Lyssna' />
      <div className='lg:text-2xl md:text-2xl sm:text-sm font-sans mb-5 text-xs'>
        <span className='undeline'>Gränslös</span> morgonradio
        <br />
        Live alla vardagar mellan 8 och 10
      </div>
      <div className='mb-5'>
      <MixlrPlayer />
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.mixlr.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target='_blank'>
            <Image
              src='/androidstore.png'
              alt=''
              width={200}
              height={150} />
          </a>
        </div>
        <div>
          <a href="https://apps.apple.com/se/app/mixlr-social-live-audio/id583705714?fbclid=IwAR3afb1zKBIfucv7C_1R-ML_hhlnMP6YJzyh6fK7JksL9WYXnzhuZH2wiEg" target='_blank'>
            <Image
              src='/applestore.png'
              alt=''
              width={200}
              height={150} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ListenLive 
