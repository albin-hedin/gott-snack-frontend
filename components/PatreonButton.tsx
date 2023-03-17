import Image from 'next/image'

const PatreonButton = () => {
  return (
    <a href="https://www.patreon.com/gottsnack/" target='_blank'>
      <div className='patreon-button box-border lg:h-20 lg:w-45 md:h-15 md:w-35 sm:h-10 sm:w-35 rounded-xl link flex'>
        <div className='' style={{
        }}>
          <Image
            className='rounded-xl'
            src='/patreon.png'
            alt=''
            width={75}
            height={75} />
        </div>
        <span className='text-white text-lg roboto-font font-bold -ml-3 mt-6 mr-3'>
          Gott snack Patreon
        </span>
      </div>
    </a>
  )
}

export default PatreonButton 
