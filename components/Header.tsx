import Link from 'next/link'

const Header = () => {
  return (
    <header className='md:mb-10 mb-2'>
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
        <h1 className='lg:text-6xl md:text-4xl text-xl lg:mt-5 md:mt-3 mt-2 start-page-title'>
          <Link className='hover:!no-underline' href="/">
            <span className='hover:opacity-80'>
              Gott snack morgonradio
            </span>
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
