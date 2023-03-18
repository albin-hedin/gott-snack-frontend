import LargeHeader from '@/components/LargeHeader'
import Image from 'next/image'

const Gottsnackteam = () => {
  return (
    <>
      <div className='text-center mb-10 px-4 pt-8 md:px-44'>
        <LargeHeader headerText='Gott snack gänget' />
        <div>
          Gott Snack grundades av Fredrik Geniet Söderholm år 2020. Projektet drogs igång med ambitionen att sända ofiltrerad och gränslös morgonradio – på Geniets sätt. Allt började med en insamling på Patreon i november 2019, där frivilliga följare kunde donera sina små eller stora bidrag. Det hela gick fort, insamlingen skramlade gott och snart hade projektet landat i en studio på Ringvägen, bra utrustning och trogna lyssnare – som ännu finansierar merparten av Gott Snack.
          Gott snack behövs för att människor som inte passar in i public service eller de kommersiella kanalernas likriktade mallar också ska få en chans att säga sin mening och få höras i etern. Hur dessa människor ser ut, var de kommer från, hur gamla de är spelar ingen roll, vi vill ha en mix av människor från från alla samhällsskikt i mitt program.
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        backgroundPosition: 'center',
      }}>
        <Image
          src='/groupPhoto.png'
          alt=''
          width={1500}
          height={5000} />
      </div></>
  )
}

export default Gottsnackteam