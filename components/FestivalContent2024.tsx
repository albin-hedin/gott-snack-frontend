import MediumHeader from '@/components/MediumHeader'
import Image from 'next/image'
import Link from 'next/link'

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
          <br></br>
          <br></br>
          <b>
            <Link href='https://billetto.se/e/gott-snack-festival-biljetter-969436?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1' target='_blank'>
              <div className='text-2xl'>
                Biljetter
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