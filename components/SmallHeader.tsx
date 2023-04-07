const SmallHeader = ({ headerText }: { headerText: string }) => {
  return (
    <h1 className='text-black lg:text-xl md:text-sm text-xs font-fredoka mb-2'>
      {headerText}
    </h1>
  )
}

export default SmallHeader