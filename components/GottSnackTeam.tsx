import LargeHeader from '@/components/LargeHeader'
import ImageWithTitle from './ImageWithTitle'

const Gottsnackteam = ({ handleModalClick }: { handleModalClick: any }): JSX.Element => {
  return (
    <>
      <div className='flex flex-col items-center md:mx-20 mx-4'>
        <LargeHeader blackText headerText='Gott snack familjen' />
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
      <div className='
      flex 
      flex-wrap
      gap-4
      justify-center
      items-center
      mx-auto max-w-[1200px]
      px-1'>
        <ImageWithTitle
          title='Fredrik'
          picUrl='/portraits/FREDRIK-kopia-1097x1536.jpg'
          onClick={() => handleModalClick(
            true,
            'fredrik',
            'https://www.instagram.com/genietsoderholm/')} />
        <ImageWithTitle
          title='August'
          picUrl='/portraits/AUGUST-kopia-1097x1536.jpg'
          onClick={() => handleModalClick(
            true,
            'agge',
            'https://www.instagram.com/aggeinthehus/')} />
        <ImageWithTitle
          title='Tora'
          picUrl='/portraits/TORA-kopia-1097x1536.jpg'
          onClick={() => handleModalClick(
            true,
            'tora',
            'https://www.instagram.com/10gemensamma/')} />
        <ImageWithTitle
          title='Max'
          picUrl='/portraits/MAX-1-kopia-732x1024.jpg'
          onClick={() => handleModalClick(
            true,
            'max',
            'https://www.instagram.com/seniorsoderholm/')} />
        <ImageWithTitle
          title='Jesper'
          picUrl='/portraits/JESPER-kopia-1097x1536.jpg'
          onClick={() => handleModalClick(
            true,
            'jesper',
            'https://www.instagram.com/jesperekstedt/')} />
        <ImageWithTitle
          title='Micke'
          picUrl='/portraits/MICKE-kopia-1097x1536.jpg'
          onClick={() => handleModalClick(
            true,
            'micke',
            'https://www.instagram.com/mikaelljungberg_/')} />
        <ImageWithTitle
          imageSux={true}
          title='Fanny'
          picUrl='/portraits/FANNY-kopia-1628x2048.jpeg'
          forceSize={true}
          onClick={() => handleModalClick(
            true,
            'fanny',
            'https://www.instagram.com/tjafanny/')} />
        <ImageWithTitle
          title='Petrina'
          picUrl='/portraits/PETRINA_Gott_Snack_PORTRAIT_3739_LOW_RES.jpg'
          onClick={() => handleModalClick(
            true,
            'petrina',
            'https://www.instagram.com/petrinahinas/')} />
        <ImageWithTitle
          title='André'
          picUrl='/portraits/ANDRE-kopia-1097x1536.jpg'
          onClick={() => handleModalClick(
            true,
            'andre',
            'https://www.instagram.com/andreperssooon/')} />
        <ImageWithTitle
          imageSux={true}
          title='Otto'
          picUrl='/portraits/otto.png'
          onClick={() => handleModalClick(
            true,
            'otto',
            'https://www.instagram.com/ottoidimman/')} />
        <ImageWithTitle
          imageSux={true}
          title='Plommon'
          picUrl='/portraits/plommon.png'
          onClick={() => handleModalClick(
            true,
            'plommon',
            'https://www.instagram.com/adam.plommon/')} />
        <ImageWithTitle
          imageSux={true}
          title='Bruce & Räkan'
          picUrl='/portraits/cats.png'
          onClick={() => handleModalClick(
            true,
            'bruce',
            'https://www.instagram.com/gottsnackradio/')} />
      </div>
    </>
  )
}

export default Gottsnackteam
