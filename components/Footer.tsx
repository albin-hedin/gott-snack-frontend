import Divider from './Divider'
import Image from 'next/image'

const Footer = () => {
  return (<>
    <Divider />
    <footer className="paddingX flex pt-12 pb-6 justify-between">
      <div className='grid grid-cols-1 text-xs md:text-sm'>
        &copy; Bing bong AB
      </div>
      <div className='grid grid-cols-3 gap-2'>
        <a href='https://www.instagram.com/gottsnackradio/?hl=en' target='_blank' title='Gott snack Instagram'>
          <Image
            className='rounded-xl'
            src='/instagram-logo.jpg'
            alt=''
            width={40}
            height={40} />
        </a>
        <a href='https://www.patreon.com/gottsnack/' target='_blank' title='Gott snack Patreon'>
          <Image
            className='rounded-xl'
            src='/patreon.png'
            alt=''
            width={40}
            height={40} />
        </a>
        <a href='https://gott-snack.mixlr.com/' target='_blank' title='Gott snack mixlr'>
          <Image
            className='rounded-xl'
            src='/mixlr-logo.png'
            alt=''
            width={40}
            height={40} />
        </a>
      </div>
      <div className='text-xs md:text-sm'>
        v 0.1.0
      </div>
    </footer></>
  )
}

export default Footer
