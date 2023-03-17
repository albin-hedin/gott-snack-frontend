import Image from 'next/image'

const LinkButton = ({
  url,
  text,
  imagePath,
  type,
}: {
  url: string,
  text: string,
  imagePath?: string,
  type: 'main' | 'secondary'
}): JSX.Element => {
  return (
    <a href={url} target='_blank'>
      <div className={`${type === 'main' ? 'orange-bg' : 'black-bg'} box-border lg:h-20 lg:w-45 md:h-15 md:w-35 sm:h-10 sm:w-35 rounded-xl link flex`}>
        <div className='' style={{
        }}>
          {imagePath && <Image
            className='rounded-xl'
            src={imagePath}
            alt=''
            width={75}
            height={75} />}
        </div>
        <span className='text-white text-lg roboto-font font-bold mt-6 mr-3'>
          {text}
        </span>
      </div>
    </a>
  )
}

export default LinkButton 
