import FestivalButton from '@/components/FestivalButton'
import FestivalContent2023 from '@/components/FestivalContent2023'
import FestivalContent2024 from '@/components/FestivalContent2024'
import FestivalContentIntern from '@/components/FestivalContentIntern'
import LargeHeader from '@/components/LargeHeader'
import { useState } from 'react'
import Image from 'next/image'
import MediumHeader from '@/components/MediumHeader'
import Link from 'next/link'
import FestivalContent2025 from '@/components/FestivalContent2025'

const Festival = () => {
  const [contentToShow, setContentToShow] = useState('2024')

  return (
    <div className='mx-3 lg:mx-52'>
      <div id='top'>
      </div>
      <div className='text-center'>
        <LargeHeader blackText headerText='Gott snack festival' />
      </div>
      <div className='
            items-center
           text-center
            md:text-lg
            font-sans
            mb-5
            '>
        <div className='
        space-x-2
        space-y-2
        mb-4'>
          <FestivalButton
            onclick={() => setContentToShow('2025')}
            text='2025'
            isActive={contentToShow === '2025'} />
          <FestivalButton
            onclick={() => setContentToShow('2024')}
            text='2024'
            isActive={contentToShow === '2024'} />
          <FestivalButton
            onclick={() => setContentToShow('2023')}
            text='2023'
            isActive={contentToShow === '2023'} />
          <FestivalButton
            onclick={() => setContentToShow('start')}
            text='Allmänt'
            isActive={contentToShow === 'start'} />
          <FestivalButton
            onclick={() => setContentToShow('intern')}
            text='Jobba som praktikant'
            isActive={contentToShow === 'intern'} />
          <FestivalButton
            onclick={() => setContentToShow('contact')}
            text='Kontakt'
            isActive={contentToShow === 'contact'} />
        </div>
        <div className='
          mx-auto
          max-w-5xl'>
          {contentToShow === 'start' &&
            <div>
              <div>
                Gott snack festival gick av stapeln för första gången 5 augusti 2023 på
                Gröndals båtklubb i Stockholm och lockade närmare 700 glada besökare
                som njöt av magisk mat från Food trucks, grym musik från hela elva akter,
                ett otroligt väder och en kärleksfull stämning som påminner om den känsla
                man fick på festivaler som Hultsfred, Emmaboda och Peace & Love.
                <br />
                Den där känslan av att musiken och gemenskapen är i fokus, inte att ett stort
                multinationellt bolag ska maximera vinst till sina aktieägare
                <br />
                <br />
              </div>
              <div>
                <MediumHeader blackText headerText='Bakgrund' />
                Jag (Fredrik Söderholm) har startat och driver morgonradioprogrammet
                Gott snack och har haft många artister och konstnärer som gäster. Jag
                vill anordna en festival där några av dessa begåvade människor får
                möjligheten att uppträda live och visa upp sina alster. Målet med podden
                är att möta människor med olika perspektiv och erfarenheter och målet
                med festivalen är också att samla människor och förenas kring det vi så
                många av oss älskar: Musik, konst & gemenskap på riktigt.
                <div className='
              mt-4
              flex 
              flex-wrap
              justify-center'>
                  <Image
                    className='rounded-xl'
                    src='/fredrik_festival.png'
                    alt=''
                    width={300}
                    height={300} />
                </div>
                <br />
                <br />
              </div>
              <div>
                <MediumHeader blackText headerText='Inkludering & kärlek är ledord' />
                Samtliga medborgare är inbjudna till att närvara på denna folkfest. Festivalen
                2023 besöktes av 680 besökare i åldersspannet 3-75. Barnfamiljer, seniorer
                och ungdomar trivdes på samma inbjudande, varma festival. Vi hade låga
                biljettpriser (250) men när en flykting från Ukraina dök upp vid entrén utan
                biljett släppte vi självklart in henne. Även barn under 12 år gick in gratis.
                <br />
                <br />
                Vi kommer under vintern/våren annonsera ett open call för konstnärer som
                vill vara med och bidra till utställningar/installationer på festivalen.
                <br />
                Alla är välkomna att delta genom att bidra till konsten på plats eller om man
                vill jobba som funktionär. Artister som vill spela på festivalen får gratis ansöka
                om att delta.
                <br />
                <br />
                Vi väljer ut ett antal akter som sedan kommer att få spela i Gott snack
                morgonradio för att få låta publiken lyssna och rösta på vilken artist som
                ska få spela ett set på festivalen.
                <br />
                <br />
              </div>
              <div>
                <MediumHeader blackText headerText='Ekonomi' />
                Festivalen 2023 fungerade för att alla artister spelade gratis och många
                eldsjälar jobbade ideellt. Festivalen gick cirka 50K back. Målet för nästa år
                är att söka bidrag och sponsorer och på så vis landa på plus minus noll.
                <br />
                <br />
                Visionen är att växa organiskt och gå plus år tre eller fyra. Om man klickar
                med gruppen och gillar konceptet finns givetvis möjligheter att fortsätta vara
                en del av arbetsgruppen kommande år och vara med och bygga Sveriges
                nya indie-festival
                <div className='
              mt-4
              flex 
              flex-wrap
              justify-center'>
                  <Image
                    className='rounded-xl'
                    src='/festival2023_pink.png'
                    alt=''
                    width={500}
                    height={400} />
                </div>
              </div>
            </div>}
          {contentToShow === 'contact' &&
            <div>
              <MediumHeader blackText headerText='Kontakt' />
              <div className='mt-4'>
                Gott snack festival på
                <Link
                  href='https://www.instagram.com/gott_snack_festival/'
                  target='_blank'>
                  <b> Instagram</b>
                </Link>
                <br />
                <b>Mail: </b>
                <Link
                  href='mailto:festival@gottsnack.nu'>
                  festival@gottsnack.nu
                </Link>
                <br />
                <b>Telefon:</b> 070-6067591
              </div>
            </div>
          }
          {contentToShow === '2023' &&
            <FestivalContent2023 />
          }
          {contentToShow === '2024' &&
            <FestivalContent2024
              setContentToShow={setContentToShow} />
          }
          {contentToShow === 'intern' &&
            <FestivalContentIntern />
          }
          {contentToShow === '2025' &&
            <FestivalContent2025
              setContentToShow={setContentToShow} />
          }
        </div>
      </div>
    </div>
  )
}

export default Festival 
