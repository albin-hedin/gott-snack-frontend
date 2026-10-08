import type { JSX } from "react";
import Image from 'next/image'
import MixlrPlayer from './MixlrPlayer'
import SpotifyPlayer from '@/components/SpotifyPlayer'

const ListenLive = (): JSX.Element => {
  return (
    <div>
      <div className='mb-5 mx-3'>
        <div className='
         grid
         grid-cols-1 
         gap-4
         md:grid-cols-2
         md:gap-6
         md:mx-6'>
          <div className='flex flex-col items-center'>
            <MixlrPlayer />
            <div className='flex flex-row mt-2'>
              <div className='mr-1'>
                <a style={{ height: "auto" }} href="https://play.google.com/store/apps/details?id=com.mixlr.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/androidstore.png'
                    alt='Ladda ned Mixlr på Google Play'
                    width={150}
                    height={130} />
                </a>
              </div>
              <div>
                <a style={{ height: "auto" }} href="https://apps.apple.com/se/app/mixlr-social-live-audio/id583705714" target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/applestore.png'
                    alt='Ladda ned Mixlr på App Store'
                    width={150}
                    height={130} />
                </a>
              </div>
            </div>
          </div>
          <div >
            <SpotifyPlayer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListenLive 
