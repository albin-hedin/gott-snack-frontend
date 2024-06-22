import Link from 'next/link'

const SiteHeader = () => {
  return (
    <header className='md:mb-10 mb-2'>
      <Link className='hover:!no-underline' href="/">
        <div className='
         text-center
         text-white 
         md:h-[500px] 
         h-[150px]' style={{
            background: 'url(/background-startpage.jpg)',
            display: 'inline-block',
            width: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
        </div>
      </Link>
    </header>
  )
}

export default SiteHeader
