import Link from 'next/link'
import SmallHeader from './SmallHeader'
import Image from 'next/image'

const ImageWithTitle = (
  { title, picUrl, onClick, forceSize }:
    { title?: string, picUrl: string, onClick?: any, forceSize?: boolean }) => {

  const renderImage = (): JSX.Element => {
    if (onClick) {
      return (
        <div className='link' onClick={() => onClick()}>
          <Image
            className={`rounded-full mr-4 ${forceSize ? 'image-force-size' : ''}`}
            src={picUrl}
            alt=''
            width={200}
            height={200} />
        </div>
      )
    } else {
      return (
        <Image
          className={`rounded-full mr-4 ${forceSize ? 'image-force-size' : ''}`}
          src={picUrl}
          alt=''
          width={200}
          height={200} />
      )
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