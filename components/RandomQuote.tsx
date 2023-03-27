import { useEffect, useState } from 'react'

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    setNewRandomQuote()

    const interval = setInterval(() => setNewRandomQuote(), 5000)
    return () => { clearInterval(interval) }
  }, [])

  const setNewRandomQuote = (): void => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomQuote]);
  }

  const quotes = [
    '"Don\'t continue please" - Jesper',
    '"Gott gott gottigott, gott snack"',
    '"Jag rökte spice innan det var farligt" - Nanna Olasdotter',
    'Micke till KonstAB: "Är ni ironiska?" KonstAB: "Suck"',
    '"Vem fan vill suga av mig?" - Patrik Lundberg på internationella kvinnodagen',
    '"Jag är inte direkt ensam om att ha legat med Håkan Hellström" - Marit Bergman',
    '"Håll käften och kör köttnacke"',
    '"Det fanns många idéer... men det landade i potatis" - Stefan Ekengren',
    '"Vår första trekant var i bastun" - Polyfamiljen',
    '"Vi knullar inte längre" - Dregen om Hellacopter',
    '"Fortsätt ge tillstånd att bränna koranen, eventuellt"',
    '"ja så är det, ah det är så, ja det är bra" - Stefan Ekengren'
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
          <blockquote className='md:text-3xl text-lg roboto-font text-black'>
            {`${currentQuote}`}
          </blockquote>
        </i>
      </div>
    </div>
  )
}

export default RandomQuote
