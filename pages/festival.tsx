import LargeHeader from '@/components/LargeHeader'
import Image from 'next/image'
import Link from 'next/link'

const Festival = () => {
  return (
    <div className='mx-2 md:mx-32'>
      <div id='top'>
      </div>
      <div>
        <div className='text-center'>
          <LargeHeader headerText='Gott snack festival' />
        </div>
        <div className='
      text-center
      lg:text-2xl
      md:text-2xl
      sm:text-sm
      text-xs
      font-sans
      mb-5'>
          <div>
            Vi vill skapa en mysig och intim festival i Stockholm som drivs av kärleken
            till musik och gemenskap! En festival för alla som inte drivs för att maximera vinst.
            <br />
            <br />
            Vi söker nån som vill hjälpa oss göra detta möjligt!
            Pluggar du eller nån du känner musik-/event arrangör eller dylikt och vill praktisera genom att vara med och skapa denna grymma festival?
            Mejla <b>gottsnackfestival@gmail.com</b> så hörs vi!
            <br />
            Följ gärna festivalen på <Link
              href='https://www.instagram.com/gott_snack_festival/'
              target='_blank'>
              <b>instagram</b>
            </Link>
          </div>
        </div>
        <div className='
        mt-2
        md:mt-16
        md:columns-2
        gap-4
        lg:text-1xl
        md:text-xl
        sm:text-sm
        text-xs
        font-sans
        ml-4
        md:ml-16'>
          <b>Uppgifter innefattar</b>
          <ul className='mt-2' style={{
            listStyleType: "circle"
          }}>
            <li> Söka tillstånd</li>
            <li>  Avfall / Vatten och elförsörjning</li>
            <li>  Spons</li>
            <li>    Boka artister</li>
            <li>Boka teknik</li>
            <li>Boka personal</li>
            <li>Hitta konstnärer/rekvisitörersomkan utsmycka området</li>
            <li>Boka foodtrucks</li>
          </ul>
          <div className='mt-2 md:mt-0'>
            <Image
              className='pt-4 pr-2'
              src='/festival.jpg'
              alt=''
              width={400}
              height={300} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Festival 
