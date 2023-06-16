import { useEffect, useState } from 'react'
import ImageWithTitle from './ImageWithTitle';

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<{
    text: string;
    picUrl: string;
  }>({ text: '', picUrl: '' });

  useEffect(() => {
    setNewRandomQuote()

    const interval = setInterval(() => setNewRandomQuote(), 5000)
    return () => { clearInterval(interval) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setNewRandomQuote = (): void => {
    const randomQuoteIndex: number = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomQuoteIndex]);
  }

  const quotes = [
    {
      text: '"Don\'t continue please" - Jesper',
      picUrl: '/portraits/JESPER-kopia-1097x1536.jpg'
    },
    {
      text: '"Jag rökte spice innan det var farligt" - Nanna Olasdotter',
      picUrl: '/portraits/nanna.webp'
    },
    {
      text: 'Micke till KonstAB: "Är ni ironiska?" KonstAB: "Suck"',
      picUrl: '/portraits/konstab.jpg'
    },
    {
      text: '"Vem fan vill suga av mig?" - Patrik Lundberg på internationella kvinnodagen',
      picUrl: '/portraits/lundberg.jpg'
    },
    {
      text: '"Jag är inte direkt ensam om att ha legat med Håkan Hellström" - Marit Bergman',
      picUrl: '/portraits/marit.jpg'
    },
    {
      text: '"Håll käften och kör köttnacke" - Okänd',
      picUrl: '/portraits/question.jpg'
    },
    {
      text: '"Det fanns många idéer... men det landade i potatis" - Stefan Ekengren',
      picUrl: '/portraits/stefan-ekengren.jpg'
    },
    {
      text: '"Vår första trekant var i bastun" - Polyfamiljen',
      picUrl: '/portraits/polly.jpg'
    },
    {
      text: '"Vi knullar inte längre" - Dregen om Hellacopter',
      picUrl: '/portraits/dregen.jpg'
    },
    {
      text: '"Fortsätt ge tillstånd att bränna koranen, eventuellt"',
      picUrl: '/portraits/question.jpg'
    },
    {
      text: '"ja så är det, ah det är så, ja det är bra" - Stefan Ekengren',
      picUrl: '/portraits/stefan-ekengren.jpg'
    },
    {
      text: '"Jag måste betala 738 miljoner" - Anders Adali om rekord-skadeståndet',
      picUrl: '/portraits/anders_adali.jpg'
    },
    {
      text: '"Jag hällde diskmedel på Polly" - Marcus Birro',
      picUrl: '/portraits/birro.jpg'
    },
    {
      text: '"De är ju TOKIGA i casino, kineserna!" - Osín Cantwell',
      picUrl: '/portraits/osin.jpeg'
    },
    {
      text: '"Jag visade kungfu sparkar för gästerna på diskoteket" - Färjan Håkan',
      picUrl: '/portraits/håkan.jpg'
    },
    {
      text: '"Jag ville inte knarka" - Hanna Hellquist om färska ADHD-diagnosen',
      picUrl: '/portraits/hellquist.webp'
    },
    {
      text: '"Jag ska fortsätta hora ut mig" - Henrik Borg om framtiden',
      picUrl: '/portraits/borg_.jpg'
    },
    {
      text: '"Förlåt, vi älskar bögar" - Jesus i Örkelljunga',
      picUrl: '/portraits/jesus.jpg'
    },
    {
      text: '"Jag fick ett batongslag i ryggen" - Mona Sahlin',
      picUrl: '/portraits/Mona_Sahlin.jpg'
    },
    {
      text: '"Martinus är Zayn, jag är Harry" - Marcus & Martinus',
      picUrl: '/portraits/marcus-martinus.png'
    },
    {
      text: '"Jag hittade min flickvän på utforkskarsidan" - Marcus & Martinus',
      picUrl: '/portraits/marcus-martinus.png'
    },
    {
      text: '"Är du utsläppt i samhället måste du anses vara en rehabilitated, sund människa" - Fredrick Federley',
      picUrl: '/portraits/Federley.jpg'
    },
    {
      text: '"Jag trodde Erik Galli skulle vara elak" - Farao Groth',
      picUrl: '/portraits/farao.jpg'
    },
    {
      text: '"Jag har skrivit 23 tennisböcker, ingen läser dem" - Björn Hellberg',
      picUrl: '/portraits/hellberg_.jpg'
    },
    {
      text: '"Ingvar levde ju hårt det vet alla, det behöver man inte sticka under stolen" - Björn Hellberg',
      picUrl: '/portraits/hellberg_.jpg'
    },
    {
      text: '"Det var märklig stämning när Zlatan grät" - Linn Nordström',
      picUrl: '/portraits/linn_nordström.jpg'
    },
    {
      text: '"Jag är inte undergiven, men inte heller övergiven i sängen" - Messiah Hallberg',
      picUrl: '/portraits/messiah.jpg'
    },
    {
      text: '"Min dotter håller på att glida ifrån mig" - Messiah Hallberg',
      picUrl: '/portraits/messiah.jpg'
    },
    {
      text: '"Jag har braj i pungen vart jag än åker" - ODZ',
      picUrl: '/portraits/odz.jpg'
    },
    {
      text: '"Jag har haft några jobbiga återfall" - Johan Croneman',
      picUrl: '/portraits/croneman.jpg'
    },
    {
      text: '"Jag har 100 trauman" - Pål Hollender',
      picUrl: '/portraits/pål.png'
    },
    {
      text: '"Jonas Gardell försökte knulla mig i en bastu" - Pål Hollender',
      picUrl: '/portraits/pål.png'
    },
    {
      text: '"Jessika är mitt livs kärlek" - Pål Hollender',
      picUrl: '/portraits/pål.png'
    },
    {
      text: '"Det är bara alkoholen jag fortfarande brottas med" - Pål Hollender',
      picUrl: '/portraits/pål.png'
    }
  ];

  return (
    <div className='mx-5'>
      <div
        style={{
          minHeight: '56px'
        }}
        className='text-center
       mt-10
       md:mt-10'>
        <i
          className='inline-flex' >
          <blockquote className='md:text-2xl text-lg roboto-font text-black'>
            {`${currentQuote.text}`}
          </blockquote>
        </i>
        <div className='flex flex-col items-center mt-2'>
          <ImageWithTitle
            imageSux
            picUrl={currentQuote.picUrl} />
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
