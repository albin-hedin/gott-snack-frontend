import LargeHeader from '@/components/LargeHeader'
import ImageWithTitle from './ImageWithTitle'

const Gottsnackteam = ({ handleModalClick }: { handleModalClick: any }): JSX.Element => {
  return (
    <>
      <div className='flex flex-col items-center md:mx-20 mx-4'>
        <LargeHeader headerText='Gott snack familjen' />
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
        <div className='flex flex-row mb-6'>
          <ImageWithTitle
            title='Fredrik'
            picUrl='/portraits/FREDRIK-kopia-1097x1536.jpg'
            onClick={() => handleModalClick(
              true,
              'fredrik',
              'https://www.instagram.com/genietsoderholm/')} />
          <ImageWithTitle
            title='Agust'
            picUrl='/portraits/AUGUST-kopia-1097x1536.jpg'
            onClick={() => handleModalClick(
              true,
              'agge',
              'https://www.instagram.com/aggeinthehus/')} />
          <ImageWithTitle
            title='Ploj'
            picUrl='/portraits/PLOJ-kopia-1097x1536.jpg'
            onClick={() => handleModalClick(
              true,
              'ploj',
              'https://www.instagram.com/rikardploj/')} />
          <ImageWithTitle
            title='Tora'
            picUrl='/portraits/TORA-kopia-1097x1536.jpg' 
            onClick={() => handleModalClick(
              true,
              'tora',
              'https://www.instagram.com/10gemensamma/')}/>
        </div>
        <div className='flex flex-row mb-6'>
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
            title='Fanny'
            picUrl='/portraits/FANNY-kopia-1628x2048.jpeg'
            forceSize={true} 
            onClick={() => handleModalClick(
              true,
              'fanny',
              'https://www.instagram.com/tjafanny/')} />
        </div>
        <div className='flex flex-row'>
          <ImageWithTitle
            title='Petrina'
            picUrl='/portraits/PETRINA_Gott_Snack_PORTRAIT_3739_LOW_RES.jpg'
            onClick={() => handleModalClick(
              true,
              'petrina',
              'https://www.instagram.com/petrinahinas/')} />
          <ImageWithTitle
            title='Andre'
            picUrl='/portraits/ANDRE-kopia-1097x1536.jpg'
            onClick={() => handleModalClick(
              true,
              'andre',
              'https://www.instagram.com/andreperssooon/')}  />
          <ImageWithTitle
            small={true}
            title='Tore'
            picUrl='/portraits/tore.png'
            onClick={() => handleModalClick(
              true,
              'tore',
              'https://www.instagram.com/torekullgren/')} />
        </div>
      </div>
    </>
  )
}

export default Gottsnackteam
