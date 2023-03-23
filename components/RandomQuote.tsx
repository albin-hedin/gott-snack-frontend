import { useEffect, useState } from 'react'

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomQuote])
  }, [])

  const quotes = [
    'Jesper: Don\'t continue please',
    'Gott, gott, gottigott gott snack',
    'Nanna Olasdotter: "Jag rökte spice innan det var farligt"',
    'Micke till KonstAB: "Är ni ironiska?" KonstAB: "Suck"',
    'Patrik Lundberg på internationella kvinnodagen: "Vem fan vill suga av mig?"',
    'Marit Bergman: Jag är inte direkt ensam om att ha legat med Håkan Hellström',
    'Håll käften och kör köttnacke',
    'Stefan Ekengren: "Det fanns många idéer... men det landade i potatis',
    'Polyfamiljen: Vår första trekant var i bastun',
    'Dregen om Hellacopters: Vi knullar inte längre',
    'Fortsätt ge tillstånd att bränna koranenm, eventuellt',
    'Stefan Ekengren: "ja så är det, ah det är så, ja det är bra"'
  ];

  return (
    <div className='mx-10'>
      <div className='text-center
       mt-10
       md:mt-2'>
        <i className='link inline-flex' onClick={() => setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
          <h1 className='lg:text-3xl md:text-2xl text-sm roboto-font text-white'>
            {`"${currentQuote}"`}
          </h1>
        </i>
      </div>
    </div>
  )
}

export default RandomQuote 
