const FestivalButton = ({
  onclick,
  text,
  isActive,
}: {
  onclick: any,
  text: string,
  isActive?: boolean,
}): JSX.Element => {
  return (
    <>
      <button
        onClick={() => onclick()}>
        <div className={`
      ${isActive ? 'patreon-button-white isActive' : 'patreon-button-white'} 
      rounded-xl 
      link 
      flex 
      justify-between 
      px-4 
      py-3 
      items-center 
      gap-1`}>
          <span className='text-black text-sm roboto-font font-bold'>
            {text}
          </span>
        </div>
      </button>
    </>
  )
}

export default FestivalButton 
