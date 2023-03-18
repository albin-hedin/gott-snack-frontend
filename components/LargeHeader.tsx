const LargeHeader = ({ headerText }: { headerText: string }) => {
  return (
    <h1 className='text-white lg:text-6xl md:text-4xl text-xl lg:mt-5 md:mt-3 mt-1 pb-5 start-page-title'>
      {headerText}
    </h1>
  )
}

export default LargeHeader