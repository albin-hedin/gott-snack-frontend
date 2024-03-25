const SmallHeader = ({ headerText, white }: { headerText: string, white?: boolean }) => {
  return (
    <h1 className={`${white ? 'text-white' : 'text-black'} lg:text-xl md:text-sm text-xs font-fredoka mb-2`}>
      {headerText}
    </h1>
  )
}

export default SmallHeader