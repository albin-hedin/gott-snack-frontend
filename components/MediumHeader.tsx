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
    lg:mt-5
    md:mt-3
    mt-1
    pb-5
    font-fredoka 
    ${blackText ? 'text-black' : 'text-white'}`}>
      {headerText}
    </h1>
  )
}

export default MediumHeader