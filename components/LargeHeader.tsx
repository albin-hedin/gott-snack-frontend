const LargeHeader = (
  { headerText, blackText, as: Tag = 'h1' }:
    {
      headerText: string,
      blackText?: boolean,
      as?: 'h1' | 'h2'
    }) => {
  return (
    <Tag className={`
    lg:text-6xl
    md:text-4xl
    text-3xl
    lg:mt-5
    md:mt-3
    pb-2
    font-fredoka
    ${blackText ? 'text-black' : 'text-white'}`}>
      {headerText}
    </Tag>
  )
}

export default LargeHeader
