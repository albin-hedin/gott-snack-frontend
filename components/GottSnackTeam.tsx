import LargeHeader from '@/components/LargeHeader'
import ImageWithTitle from './ImageWithTitle'

const Gottsnackteam = () => {
  return (
    <>
      <div className='flex flex-col items-center md:mx-20 mx-4'>
        <LargeHeader headerText='Gott snack gänget' />
        <div className='text-center max-w-5xl mb-6'>
          Gott Snack grundades av Fredrik Geniet Söderholm år 2020. Projektet drogs igång med ambitionen att sända ofiltrerad och gränslös morgonradio – på Geniets sätt.
          <br />
          <br />
          Allt började med en insamling på Patreon i november 2019, där frivilliga följare kunde donera sina små eller stora bidrag. Det hela gick fort, insamlingen skramlade gott och snart hade projektet landat i en studio på Ringvägen, bra utrustning och trogna lyssnare – som ännu finansierar merparten av Gott Snack.
          <br />
          <br />
          Gott snack behövs för att människor som inte passar in i public service eller de kommersiella kanalernas likriktade mallar också ska få en chans att säga sin mening och få höras i etern. Hur dessa människor ser ut, var de kommer från, hur gamla de är spelar ingen roll, vi vill ha en mix av människor från från alla samhällsskikt i mitt program.
        </div>
      </div>
      <div className='flex flex-col items-center mx-4'>
        <div style={{width: "auto"}} className='flex flex-row mb-6'>
          <ImageWithTitle
            title='Fredrik'
            picUrl='/portraits/FREDRIK-kopia-1097x1536.jpg'
            linkUrl='/fredrik#top' />
          <ImageWithTitle
            title='Agust'
            picUrl='/portraits/AUGUST-kopia-1097x1536.jpg' />
          <ImageWithTitle
            title='Ploj'
            picUrl='/portraits/PLOJ-kopia-1097x1536.jpg' />
          <ImageWithTitle
            title='Tora'
            picUrl='/portraits/TORA-kopia-1097x1536.jpg' />
        </div>
        <div className='flex flex-row mb-6'>
          <ImageWithTitle
            title='Max'
            picUrl='/portraits/MAX-1-kopia-732x1024.jpg'
            linkUrl='/max#top' />
          <ImageWithTitle
            title='Jesper'
            picUrl='/portraits/JESPER-kopia-1097x1536.jpg'
            linkUrl='/jesper#top' />
          <ImageWithTitle
            title='Micke'
            picUrl='/portraits/MICKE-kopia-1097x1536.jpg' />
          <ImageWithTitle
            title='Fanny'
            picUrl='/portraits/FANNY-kopia-1628x2048.jpeg' />
        </div>
        <div className='flex flex-row'>
        <ImageWithTitle
            title='Petrina'
            picUrl='/portraits/PETRINA_Gott_Snack_PORTRAIT_3739_LOW_RES.jpg' />
          <ImageWithTitle
            title='Andre'
            picUrl='/portraits/ANDRE-kopia-1097x1536.jpg'
            linkUrl='/max#top' />
          <ImageWithTitle
            title='Ella'
            picUrl='/portraits/ELLA-kopia-1097x1536.jpg'
            linkUrl='/jesper#top' />
          <ImageWithTitle
            title='Hampus'
            picUrl='/portraits/HAMPUS-kopia-1097x1536.jpg' />
        </div>
      </div>
    </>
  )
}

export default Gottsnackteam