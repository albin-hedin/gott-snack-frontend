import Image from 'next/image'
import MixlrPlayer from './MixlrPlayer'
import SpotifyPlayer from '@/components/SpotifyPlayer'

const ListenLive = () => {
  return (
    <div className='flex flex-col items-center mt-2'>
      <div className='mb-5 mx-3'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-4'>
          <div>
            <div className='mb-4'>
              <MixlrPlayer />
            </div>
            {/* <div className='grid grid-cols-2'>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.mixlr.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target='_blank'>
                  <Image
                    src='/androidstore.png'
                    alt=''
                    width={200}
                    height={150} />
                </a>
              </div>
              <div className='mb-5'>
                <a href="https://apps.apple.com/se/app/mixlr-social-live-audio/id583705714?fbclid=IwAR3afb1zKBIfucv7C_1R-ML_hhlnMP6YJzyh6fK7JksL9WYXnzhuZH2wiEg" target='_blank'>
                  <Image
                    src='/applestore.png'
                    alt=''
                    width={200}
                    height={150} />
                </a>
              </div>
            </div> */}
            <div>
              <SpotifyPlayer />
            </div>
          </div>
          <div className=''>
            <Image
              src='/senaste.jpg'
              alt=''
              width={665}
              height={1300} />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListenLive 
