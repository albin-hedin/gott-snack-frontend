import MediumHeader from '@/components/MediumHeader'
import Image from 'next/image'

const FestivalContent2024 = () => {
  return (
    <>
      <div>
        <div>
          <MediumHeader blackText headerText='Festivalen 2024' />
          Festivalen 2024 äger rum 2-3 augusti och planeras under hösten 2023- våren
          2024 av en ideell arbetsgrupp och BingBong Event AB är bolaget som är
          ansvarig huvudman. Arbetsgruppen är fram till veckan innan festivalen tre
          personer (utspridda över landet) och under festivalen kommer vi att aktivera
          15-25 funktionärer samt samarbetspartners som bistår med scen, ljud, ljus,
          dekor, hyrtoaletter, event-prylar etc.
          BingBong Event AB arrangerar festivalen och ansvarar för allt från tillstånd,
          logistik, planering, redovisning, städning, bokning av artister etc.
          <br />
          <br />
        </div>
        <div>
          <MediumHeader blackText headerText='ARTISTER' />
          Tanken att boka några större namn som kan dra lite mer publik.
          Exempel på artister vi redan börjat dra i:
          <br />
          • Avantgardet
          <br />
          • Linn Koch-Emmery
          <br />
          • Love Antell
          <br />
          • Kristian Anttila
          <br />
          • Bröderna Norén
          <br />
          Vi planerar även att boka en mellanakt i form av manliga dansare
          i Chippendale-stil.
          <div className='
              mt-4
              flex 
              flex-wrap
              justify-center'>
            <Image
              className='rounded-xl'
              src='/festival_stagedive.png'
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