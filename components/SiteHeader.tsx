import Link from 'next/link'
import Image from 'next/image'

const SiteHeader = () => {
  return (
    <header className='md:mb-10 mb-2'>
      <Link className='hover:!no-underline' href="/" aria-label="Gott snack – startsida">
        <div className='
         relative
         w-full
         md:h-[500px] 
         h-[150px]'>
          <Image
            src='/background-startpage.jpg'
            alt=''
            fill
            preload
            sizes='100vw'
            className='object-cover object-center'
          />
        </div>
      </Link>
    </header>
  )
}

export default SiteHeader
