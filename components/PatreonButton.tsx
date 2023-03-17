import Image from 'next/image'

const PatreonButton = () => {
  return (
    <a href="https://www.patreon.com/gottsnack/" target='_blank'>
      <div className='patreon-button box-border rounded-xl link flex'>
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
