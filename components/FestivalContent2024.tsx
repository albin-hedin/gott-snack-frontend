import MediumHeader from '@/components/MediumHeader'
import Image from 'next/image'
import Link from 'next/link'

const FestivalContent2024 = ({ setContentToShow }: { setContentToShow: (contentToShow: string) => void }) => {
  return (
    <>
      <div>
        <div>
          <MediumHeader blackText headerText='Festivalen 2024' />
          Gott snack festival kommer i år att arrangeras på Stadsgårdsterminalen den 2 & 3 augusti med stöd av Stockholms stad och Kulturrådet. Förra året blev en succé där 700 gäster dansade in sommarnatten till ljus musik.
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
          Alla ska trivas och känna sig välkomna på festivalen. Om du har särskilda behov eller önskemål för tillgänglighetsanpassning, såsom tillgång till handikapptoalett eller en reserverad plats på ett avspärrat område, är vi här för att hjälpa till.
          <br></br>
          <span className='font-bold link' onClick={() => setContentToShow('contact')}> Kontakta oss gärna</span> så gör vi vårt absolut bästa för att tillgodose dina behov. Vi vill göra din festivalupplevelse så rolig, trevlig och smidig som möjligt!
          <br></br>
          <br></br>
          Liten festival = väldigt begränsat antal biljetter!
          <br></br>
          <br></br>
          <b>
            <Link href='https://billetto.se/e/gott-snack-festival-biljetter-969436?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1' target='_blank'>
              <div className='text-2xl'>
                Biljetter (billetto.se)
              </div>
            </Link>
          </b>
          <div className='
              mt-4
              flex 
              flex-wrap
              justify-center'>
            <Image
              className='rounded-xl'
              src='/festival24/poster24WithText.JPG'
              alt=''
              width={400}
              height={500} />
          </div>
        </div>
      </div>
    </>
  )
}

export default FestivalContent2024