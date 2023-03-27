import Link from 'next/link'
import SmallHeader from './SmallHeader'
import Image from 'next/image'

const ImageWithTitle = (
  { title, picUrl, linkUrl, forceSize }:
    { title?: string, picUrl: string, linkUrl?: string, forceSize?: boolean }) => {

  const renderImage = (): JSX.Element => {
    if (linkUrl) {
      return (
        <Link href={linkUrl}>
          <Image
            className={`rounded-full mr-4 ${forceSize ? 'image-force-size' : ''}`}
            src={picUrl}
            alt=''
            width={200}
            height={200} />
        </Link>
      )
    } else {
      return (
        <Image
          className={`rounded-full mr-4 ${forceSize ? 'image-force-size' : ''}`}
          src={picUrl}
          alt=''
          width={200}
          height={200} />)
    }
  }
  return (
    <div className='text-center'>
      {title &&
        <div className='mr-4'>
          <SmallHeader headerText={title} />
        </div>}
      {renderImage()}
    </div>
  )
}

export default ImageWithTitle