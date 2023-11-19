import Image from 'next/image'
import MixlrPlayer from './MixlrPlayer'
import SpotifyPlayer from '@/components/SpotifyPlayer'
import { useEffect, useState } from 'react'
import cosmic from 'cosmicjs'

const ListenLive = ({ handlePicModalClick }: { handlePicModalClick: any }): JSX.Element => {
  const [weeklySchedulePicUrl, setWeeklySchedulePicUrl] = useState('')

  useEffect(() => {
    (async () => {
      const cosmicApi = cosmic()
      const bucket = cosmicApi.bucket({
        slug: 'gottsnack-fe-prd',
        read_key: 'P8TfyJeSr2c6W7eMBRuoRXfUes72duVLbFsJ9VaRLcSro2NWDv'
      })

      const data = await bucket.objects.find({
        type: 'weekly-schedule',
        slug: 'la'
      })

      setWeeklySchedulePicUrl(data?.objects[0]?.metadata?.weeklyschedule.url ?? '/senaste.jpg')
    })()
  })

  return (
    <div>
      <div className='mb-5 mx-3'>
        <div className='
         grid
         grid-cols-1 
         gap-4
         md:grid-cols-3 
         md:gap-6
         md:mx-6'>
          <div className='flex flex-col items-center'>
            <MixlrPlayer />
            <div className='flex flex-row mt-2'>
              <div className='mr-1'>
                <a style={{ height: "auto" }} href="https://play.google.com/store/apps/details?id=com.mixlr.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target='_blank'>
                  <Image
                    src='/androidstore.png'
                    alt=''
                    width={150}
                    height={130} />
                </a>
              </div>
              <div>
                <a style={{ height: "auto" }} href="https://apps.apple.com/se/app/mixlr-social-live-audio/id583705714?fbclid=IwAR3afb1zKBIfucv7C_1R-ML_hhlnMP6YJzyh6fK7JksL9WYXnzhuZH2wiEg" target='_blank'>
                  <Image
                    src='/applestore.png'
                    alt=''
                    width={150}
                    height={130} />
                </a>
              </div>
            </div>
          </div>
          <div >
            <SpotifyPlayer />
          </div>
          <div className='flex flex-col items-center'>
            <Image
              className='link
              pointer-events-none
              md:pointer-events-auto'
              onClick={() => handlePicModalClick(true, weeklySchedulePicUrl)}
              src={weeklySchedulePicUrl}
              alt=''
              width={465}
              height={1000} />
          </div>
        </div>
      </div>
    </div>
  )
}



export default ListenLive 
