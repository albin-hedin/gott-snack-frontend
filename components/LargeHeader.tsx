const LargeHeader = (
  { headerText, blackText }:
    {
      headerText: string,
      blackText?: boolean
    }) => {
  return (
    <h1 className={`
    lg:text-6xl
    md:text-4xl
    text-3xl
    lg:mt-5
    md:mt-3
    mt-
    pb-2
    font-fredoka
    ${blackText ? 'text-black' : 'text-white'}`}>
      {headerText}
    </h1>
  )
}

export default LargeHeader