import MediumHeader from '@/components/MediumHeader'
import Image from 'next/image'

const FestivalContent2025 = ({ setContentToShow }: { setContentToShow: (contentToShow: string) => void }) => {
  return (
    <>
      <div>
        <div>
          <MediumHeader blackText headerText='Festivalen 2025' />
          Mer info om kommer snart!
          <div className='
              mt-4
              flex 
              flex-wrap
              justify-center'>
            <Image
              className='rounded-xl'
              src='/festival24/new-cat-festival.jpg'
              alt=''
              width={400}
              height={500} />
          </div>
        </div>
      </div>
    </>
  )
}

export default FestivalContent2025