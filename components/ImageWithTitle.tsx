import SmallHeader from './SmallHeader'
import Image from 'next/image'

const ImageWithTitle = (
  { title, picUrl, onClick, forceSize, small, imageSux }:
    { title?: string, picUrl: string, onClick?: any, forceSize?: boolean, small?: boolean, imageSux?: boolean }) => {

  const renderImage = (): JSX.Element => {
    if (imageSux) {
      return (
        <div
          style={{ width: '100%', height: '100%', position: 'relative' }}
          className={`${onClick ? 'link' : ''}`} onClick={() => onClick ? onClick() : () => { }}>
          <Image
            src={picUrl}
            style={{
              objectFit: 'cover'
            }}
            alt=''
            fill />
        </div>
      )
    }
    else if (onClick) {
      return (
        <div className={`${onClick ? 'link' : ''}`} onClick={() => onClick ? onClick() : () => { }}>
          <Image
            src={picUrl}
            alt=''
            width={small ? 175 : 200}
            height={small ? 170 : 200} />
        </div>
      )
    } else {
      return (
        <Image
          src={picUrl}
          alt=''
          width={small ? 175 : 200}
          height={small ? 170 : 200} />
      )
    }
  }
  return (
    <div className='text-center mt-1'>
      {title &&
        <div className='mr-4'>
          <SmallHeader headerText={title} />
        </div>}
      <div className='
       w-[165px] h-[231px]
       md:w-[195px] md:h-[273px]
       overflow-hidden 
       rounded-full'>
        {renderImage()}
      </div>
    </div>
  )
}

export default ImageWithTitle