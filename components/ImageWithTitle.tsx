import type { JSX } from "react";
import SmallHeader from './SmallHeader'
import Image from 'next/image'

const ImageWithTitle = (
  { title, picUrl, alt, onClick, small, imageSux }:
    { title?: string, picUrl: string, alt?: string, onClick?: () => void, small?: boolean, imageSux?: boolean }) => {
  const altText = alt ?? title ?? ''

  const renderImage = (): JSX.Element => {
    const image = imageSux
      ? (
        <Image
          src={picUrl}
          style={{
            objectFit: 'cover'
          }}
          alt={altText}
          fill />
      )
      : (
        <Image
          src={picUrl}
          alt={altText}
          width={small ? 175 : 200}
          height={small ? 170 : 200} />
      )

    if (onClick) {
      return (
        <button
          type='button'
          aria-label={title ? `Läs mer om ${title}` : undefined}
          style={imageSux ? { width: '100%', height: '100%', position: 'relative' } : undefined}
          className='link block'
          onClick={onClick}>
          {image}
        </button>
      )
    }

    if (imageSux) {
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {image}
        </div>
      )
    }

    return image
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
