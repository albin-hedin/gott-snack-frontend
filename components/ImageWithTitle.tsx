import Link from 'next/link'
import SmallHeader from './SmallHeader'
import Image from 'next/image'

const ImageWithTitle = ({ title, linkUrl }: { title?: string, linkUrl: string }) => {
  return (
    <div className='text-center'>
      {title && <SmallHeader headerText={title} />}
      <Link href="/fredrik">
        <Image
          className='rounded-full mr-4'
          src={linkUrl}
          alt=''
          width={200}
          height={200} />
      </Link>
    </div>
  )
}

export default ImageWithTitle