import LargeHeader from '@/components/LargeHeader'
import Image from 'next/image'
import Link from 'next/link'

const Festival = () => {
  return (
    <div className='mx-3 lg:mx-52'>
      <div id='top'>
      </div>
      <div className='text-center'>
        <LargeHeader headerText='Gott snack festival' />
        <i><b>Första upplagan av Gott snack festivalen BLIR av lördagen den 5 augusti 2023 vid Gröndals båtklubb!</b></i>
      </div>
      <div className='items-center'>
        <div className='
            text-center
            md:text-lg
            font-sans
            mb-5'>
          <div>
            <br />
            Äntligen sjösätter vi drömprojektet Gott snack festival på riktigt! Vi hoppas att ni vill hjälpa oss göra detta möjligt så att det kan bli en underbar tradition!
            För att gå runt kommer vi behöva sälja minst 600 stödbiljetter á 250 kronor! Vi kommer inte kräva biljetter för inträde men vi behöver ert stöd för att kunna genom genomföra denna folkfest!
            <br />
            <br />
            Vi behöver även få in några företag som stöttar festivalen! Där finns möjlighet att köpa två olika typer av biljetter: stora eller lilla företagskramen!
            Mejla oss på <b>festival@gottsnack.nu</b> så snackar vi upplägg!
            <br />
            <br />
            Vi kommer inte neka någon inträde eller jaga plankare för vi vill att festivalen ska finnas för att ni vill att den ska finnas! Och då hoppas vi att ni vill stötta den med en stödbiljett!
            Om vi inte får in den summa vi behöver för att gå runt (ca 280K) två veckor innan datumet för festivalen <b>(22/7)</b> så kommer evenemanget ställas in och alla får sina pengar tillbaka! Man tar alltså ingen risk genom att köpa en biljett!
            <br />
            <br />
            <b>Vi måste alltså ha sålt ALLA stödbiljetter senast 22/7</b>
            <br />
            Detta är tack vare EasyArr som har ett fiffigt system som håller i pengarna tills deadline och sedan betalar tillbaka pengarna till varje enskild biljettköpare om evenemanget inte blir av pga att hela summan inte lyckades tjänas in.
            <br />
            <i>Pengarna tillbaka om festivalen ställs in!</i>
            <br />
            <br />
            Följ gärna festivalen på <Link
              href='https://www.instagram.com/gott_snack_festival/'
              target='_blank'>
              <b>Instagram</b>
            </Link> och kolla in evenemanget på <Link
              href='https://www.facebook.com/events/3412056322456299'
              target='_blank'>
              <b>Facebook</b>
            </Link>
            <br />
            <br />
            <div className='text-center flex flex-col items-center'>
              Läs om festivalen på
              <Link
                href='https://gaffa.se/nyheter/2023/maj/gott-snack-ny-endagsfestival-till-stockholm/'
                target='_blank'>
                <Image
                  className='rounded-lg pt-2'
                  src='/gaffa.png'
                  alt=''
                  width={120}
                  height={120} />
              </Link>
              <Link
                href='https://ng.se/artiklar/fredrik-soderholm-startar-festival'
                target='_blank'>
                <Image
                  className='rounded-lg pt-2'
                  src='/nöjesguiden.png'
                  alt=''
                  width={140}
                  height={140} />
              </Link>
              <Link
                href='https://www.mitti.se/nyheter/fredrik-bjuder-in-till-festival-pa-barndomens-ravudden-6.3.82585.e1b32dca83'
                target='_blank'>
                <Image
                  className='rounded-lg pt-2'
                  src='/mittisthlm.png'
                  alt=''
                  width={140}
                  height={140} />
              </Link>
            </div>
            <br />
            <div className='text-2xl md:text-3xl'>
              <Link
                href='https://app.easyarr.se/arrangemang/Gottsnackfestival.html'
                target='_blank'>
                <b>Köp stödbiljetter här!</b>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <Image
            src='/gs-festival.jpg'
            alt=''
            width={400}
            height={300} />
        </div>
      </div>
    </div>
  )
}

export default Festival 
