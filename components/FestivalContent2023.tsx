import Image from 'next/image'
import Link from 'next/link'
import MediumHeader from '@/components/MediumHeader'

const FestivalContent2023 = () => {
  return (
    <>
      <div>
      <MediumHeader blackText headerText='Festivalen 2023' />
        Första upplagan av Gott snack festivalen BLIR av lördagen den 5 augusti 2023 vid Gröndals båtklubb!
        <br />
        Köp en biljett eller två så att vi äntligen kan sjösätta Stockholms nya kärleksfulla endags-festival!
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
      </div>
      <div className='
              mt-4
              flex 
              flex-wrap
              gap-4
              justify-center
              items-center
              mx-auto max-w-[1200px]
              px-1'>
        <Image
          src='/gs-festival.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/forfest.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/festrival_funk.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/planch4.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/planch5.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/planch6.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/planch3.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/planch2.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/planch.jpg'
          alt=''
          width={400}
          height={300} />
        <Image
          src='/planch7.jpg'
          alt=''
          width={400}
          height={300} />
      </div>
    </>
  )
}

export default FestivalContent2023