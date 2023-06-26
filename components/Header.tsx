import Link from 'next/link'

const Header = () => {
  return (
    <header className='md:mb-10 mb-2'>
      <div className='text-center flex flex-col items-center' style={{
        backgroundColor: '#282828'
      }}>
        <div
          className='mt-2 font-semibold'>
        </div>
        <div className='lg:text-lg md:text-sm font-sans mt-2 text-xs text-white'>
          Gott snack har sommarlov. Livesändningar tillbaka i augusti. Sommarpoddar släpps varje vecka
        </div>
        <div className='grid grid-cols-1'>
          <button className='mb-6'>
          </button>
        </div>
      </div>
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
        <h1 className='lg:text-7xl md:text-5xl text-2xl lg:mt-5 md:mt-3 mt-2 font-fredoka'>
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
