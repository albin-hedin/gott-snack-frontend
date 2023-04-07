const MediumHeader = (
  { headerText, blackText }:
    {
      headerText: string,
      blackText?: boolean
    }) => {
  return (
    <h1 className={`
    lg:text-3xl
    md:text-2xl
    text-lg
    font-fredoka 
    ${blackText ? 'text-black' : 'text-white'}`}>
      {headerText}
    </h1>
  )
}

export default MediumHeader