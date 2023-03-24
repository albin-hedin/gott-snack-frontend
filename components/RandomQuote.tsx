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
    '"Jesper: Don\'t continue please"',
    '"Gott, gott, gottigott gott snack"',
    'Nanna Olasdotter: "Jag rökte spice innan det var farligt"',
    'Micke till KonstAB: "Är ni ironiska?" KonstAB: "Suck"',
    'Patrik Lundberg på internationella kvinnodagen: "Vem fan vill suga av mig?"',
    'Marit Bergman: "Jag är inte direkt ensam om att ha legat med Håkan Hellström"',
    '"Håll käften och kör köttnacke"',
    'Stefan Ekengren: "Det fanns många idéer... men det landade i potatis"',
    'Polyfamiljen: "Vår första trekant var i bastun"',
    'Dregen om Hellacopters: "Vi knullar inte längre"',
    '"Fortsätt ge tillstånd att bränna koranen, eventuellt"',
    'Stefan Ekengren: "ja så är det, ah det är så, ja det är bra"'
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
