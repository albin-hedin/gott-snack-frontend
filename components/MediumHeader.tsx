const MediumHeader = (
  { headerText, blackText }:
    {
      headerText: string,
      blackText?: boolean
    }) => {
  return (
    <h2 className={`
    lg:text-3xl
    md:text-2xl
    text-lg
    font-fredoka 
    ${blackText ? 'text-black' : 'text-white'}`}>
      {headerText}
    </h2>
  )
}

export default MediumHeader