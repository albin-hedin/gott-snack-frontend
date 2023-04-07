const LargeHeader = (
  { headerText, blackText }:
    {
      headerText: string,
      blackText?: boolean
    }) => {
  return (
    <h1 className={`lg:text-6xl md:text-4xl text-xl lg:mt-5 md:mt-3 mt-1 pb-5 font-fredoka ${blackText ? 'text-black' : 'text-white'}`}>
      {headerText}
    </h1>
  )
}

export default LargeHeader