import Divider from './Divider'
import Image from 'next/image'

const Footer = () => {
  return (<>
    <Divider />
    <footer className="paddingX mt-4 pb-6">
      <div className='grid grid-cols-3 gap-2 place-items-center'>
        <div className='grid grid-cols-1 text-xs md:text-sm'>
          &copy; Bing bong AB
        </div>
        <div className='flex flex-row'>
          <a href='https://www.instagram.com/gottsnackradio/?hl=en' target='_blank' title='Instagram'>
            <Image
              className='rounded-xl'
              src='/instagram-logo.jpg'
              alt=''
              width={40}
              height={40} />
          </a>
          <a className='ml-2' href='https://www.patreon.com/gottsnack/' target='_blank' title='Patreon'>
            <Image
              className='rounded-xl'
              src='/patreon.png'
              alt=''
              width={40}
              height={40} />
          </a>
          <a className='ml-2' href='https://gott-snack.mixlr.com/' target='_blank' title='Mixlr'>
            <Image
              className='rounded-xl'
              src='/mixlr-logo.png'
              alt=''
              width={40}
              height={40} />
          </a>
        </div>
      </div>
    </footer></>
  )
}

export default Footer
