import Link from 'next/link'
import Image from 'next/image'

const CtaLink = ({ href, text }: { href: string, text: string }) => {
  return (
    <Link
      href={href}
      className='patreon-button rounded-xl link inline-flex justify-between px-4 py-3 items-center gap-1'>
      <span className='text-white text-lg roboto-font font-bold'>
        {text}
      </span>
      <Image
        src='/icons8-chevron-right-30.png'
        alt=''
        width={25}
        height={25} />
    </Link>
  )
}

export default CtaLink
