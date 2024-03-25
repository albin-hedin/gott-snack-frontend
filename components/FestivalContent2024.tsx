import MediumHeader from '@/components/MediumHeader'
import Image from 'next/image'
import Link from 'next/link'

const FestivalContent2024 = () => {
  return (
    <>
      <div>
        <div>
          <MediumHeader blackText headerText='Festivalen 2024' />
          Gott snack festival återkommer till Gröndals båtklubb den 2 & 3 augusti efter förra årets succé där 700 gäster dansade in sommarnatten till ljus musik.
          Gröndals Båtklubb är en gemytlig oas 10 min från city med tillgång till bastu, bad och kajak-uthyrning.
          På området kommer det dessutom finnas två barer, foodtrucks, co-creation, loungehäng, schyssta viner utvalda av sommelier, närproducerad öl från Fjäderholmarnas bryggeri och hard seltzer i goda smaker från Kubik.
          <br></br>
          <br></br>
          Upplev detta tillsammans med underbar livemusik från artister som <b>Llojd, Boys and Ivy, Tiger</b> och <b>Aasma</b>.
          Fler STORA släpp kommer snart, följ oss på <Link
            href='https://www.instagram.com/gott_snack_festival/'
            target='_blank'>
            <b>Instagram</b>
          </Link> för uppdateringar!
          Köp dina biljetter nu och åk med på det kärleksfulla tåget som är Stockholms enda nya indie-festival!
          <br></br>
          <br></br>
          Liten festival = väldigt begränsat antal biljetter!
          Området ligger ca 10 minuter från Liljeholmen. Tar du buss eller tvärbanan till Gröndal är det bara 5 minuters promenad till båtklubben!
          <br></br>
          <br></br>
          <b>
            <Link href='https://billetto.se/e/gott-snack-festival-biljetter-969436?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1' target='_blank'>
              <div className='text-2xl'>
                Biljetter
              </div>
            </Link>
            (EARLY BIRD TILLS 29/3)
          </b>
          <div className='
              mt-4
              flex 
              flex-wrap
              justify-center'>
            <Image
              className='rounded-xl'
              src='/festival24/poster24.jpg'
              alt=''
              width={300}
              height={300} />
          </div>
        </div>
      </div>
    </>
  )
}

export default FestivalContent2024