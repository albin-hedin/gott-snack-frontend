import ImageWithTitle from '@/components/ImageWithTitle'
import LargeHeader from '@/components/LargeHeader'

const JesperAbout = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center mb-10'>
        <LargeHeader headerText='Fredrik "Geniet" Söderholm' />
        <div className='px-44'>
          Fredrik Geniet Söderholm grundade Gott Snack med ambitionen att göra morgonradio på sitt sätt. Tidigare känd från Sveriges Radio och har efter Gott Snacks framfart också gjort poddar som Sorry - Allt gick åt helvete med Ola Rapace, Schulman och Geniet med Calle Schulman och den nya klockdotterpodden till Gott Snack- Ur-Gott Snack. Geniet programleder livesändningarna i Gott Snack.
        </div>
      </div>
      <ImageWithTitle
        title=''
        linkUrl='/portraits/FREDRIK-kopia-1097x1536.jpg' />
    </div>
  )
}

export default JesperAbout