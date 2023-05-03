import LargeHeader from '@/components/LargeHeader'
import Image from 'next/image'
import Link from 'next/link'

const Festival = () => {
  return (
    <div className='mx-3 md:mx-44'>
      <div id='top'>
      </div>
      <div>
        <div className='text-center'>
          <LargeHeader headerText='Gott snack festival' />
          <i><b>Första upplagan av Gott snack festivalen BLIR av lördagen den 5 augusti 2023!</b></i>
        </div>
        <div className='items-center grid md:grid-cols-2 grid-cols-1 md:gap-4'>
          <div className='
            text-center
            md:text-lg
            font-sans
            mb-5'>
            <div>
              <br />
              <br />
              Vi har fått tillstånd och har nu börjat jobbat med att boka artister och få in sponsorer!
              Vi har ett tillstånd på 400 personer men skulle vilja kolla intresset! Om det är så att många fler är sugna så tänker vi att det är bra att öka den siffran i tillståndet!
              <br />
              <br />
              I skrivande stund har vi tre bokade band!
              <br />
              <Link
                href='https://www.instagram.com/division7band/'
                target='_blank'>
                <b><i>Division 7</i></b>
                <br />
              </Link><Link
                href='https://www.instagram.com/rebecka_sandberg/'
                target='_blank'>
                <b><i>Rebecka Sandberg</i></b>
              </Link>
              <br />
              <Link
                href='https://www.instagram.com/hej.tiger/'
                target='_blank'>
                <b><i>Tiger</i></b>
              </Link>
              <br />
              <br />
              Förfrågade:
              <br />
              <Link
                href='https://www.instagram.com/avantgardet_bandet/'
                target='_blank'>
                <b><i>Avantgardet</i></b>
              </Link>
              <br />
              <Link
                href='https://www.instagram.com/shoutoutloudsofficial/'
                target='_blank'>
                <b><i>Shout Out Louds</i></b>
              </Link>
              <br />
              <br />
              Utöver banden kommer det också finnas <b>Spådam</b>, <b>DJ</b>, <b>Foodtrucks</b> och <b>Konstutställning</b>.
              <br />
              <br />
              TAW, Aasma och Boys & Ivy kunde tyvärr inte detta datum i år!
              <br />
              Har ni förslag på artister var inte blyga för att skicka på insta dm eller mejla på <b>festival@gottsnack.nu</b>
              <br />
              <br />
              Känner ni konstnärer som vill visa upp sina alster får ni gärna tipsa oss!
              Fler förslag på fler roliga saker på området som vore mysigt mottages tacksamt!
              Om ni känner härliga människor som driver reko bolag som man kan sammarbeta med får ni gärna tipsa oss också!
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
              <div className='text-xl md:text-2xl'>
                <Link
                  href='https://app.easyarr.se/arrangemang/Gottsnackfestival.html'
                  target='_blank'>
                  <b>Köp stödbiljetter här!</b>
                </Link>
              </div>
              <br />
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/gs-festival.jpg'
              alt=''
              width={500}
              height={300} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Festival 
