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
        </div>
        <div className='
      text-center
      md:text-lg
      font-sans
      mb-5'>
          <div>
            Pirrigt! Nu har vi fått tillstånd och nu börjar ju det riktiga arbetet! Dela gärna detta <Link
              href='https://www.instagram.com/p/CrbcepbtwFL/'
              target='_blank'>
              <i>inlägg på instagram</i>
            </Link> järnet och peppa igång hajpen så folk vill hjälpa till och vara en del av detta drömprojekt!!!
         
            Fattar såklart att jag är en GLAD och DUM amatör som säkert kommer behöva fixa ett nytt tillstånd med lite mer grejer på men nu har vi alla fall NÅNTING att börja med!!🥳🥳🥳
            Känns så sjukt kul att börja jobba ordentligt med detta nu! 🤗🤗
            <br />
            <br />
            Sponsorer känns typ prio för just nu finns NOLL kronor i detta haha! Men vi löser det visst? Tillsammans kan vi ju klara vad som helst visst!!!
            Tack alla som bidrog på kickstarter för typ TVÅ är sen! Ni ska belönas på nåt sätt🥹🥹
            <br />
            <br />
            Alla som vill bidra med kompetens eller arbetskraft är givetvis också välkomna! Ni förstår ju att det är en jävla massa jobb framgent nu om detta ska ROS i hamn och kunna bli en underbar TRADITION!!🥵🥵🥰🥰🥰
            <br />
            <br />
            Folk verkar peppade bara av moodboarden! Vilket lovar jävligt gott! <Link
              href='https://www.instagram.com/division7band/'
              target='_blank'>
              <b><i>Division 7</i></b>
            </Link> har sagt ja! <Link
              href='https://www.instagram.com/rebecka_sandberg/'
              target='_blank'>
              <b><i>Rebecka Sandberg</i></b>
            </Link> med band är ytterst positiva! <Link
              href='https://www.instagram.com/avantgardet_bandet/'
              target='_blank'>
              <b><i>Avantgardet</i></b>
            </Link> vill köra och undersöker just nu möjligheterna!
            <br />
            <br />
            Vilka är Sveriges två minst aggressiva ordningsvakter?<br /> Dom vill vi ha!
            Mejla alla tips eller uppslag till: <b>festival@gottsnack.nu</b>
            <br />
            <br />
            Vi vill inte göra den så fina platsen ful med staket så vi skiter i inträde och hoppas att folk vill bidra frivilligt med en slant istället♥️🥰🥹
            <br />
            <br />
            Följ gärna festivalen på <Link
              href='https://www.instagram.com/gott_snack_festival/'
              target='_blank'>
              <b>Instagram</b>
            </Link>
            <br />
            <br />
            <i>Er uppspelta, Söderholm den yngre🌝</i>
            <div className='flex flex-col items-center'>
              <Image
                className='pt-4 pr-2'
                src='/festival2.png'
                alt=''
                width={400}
                height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Festival 
