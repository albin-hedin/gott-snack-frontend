const SmallHeader = ({ headerText, white }: { headerText: string, white?: boolean }) => {
  return (
    <h3 className={`${white ? 'text-white' : 'text-black'} lg:text-xl md:text-sm text-xs font-fredoka mb-2`}>
      {headerText}
    </h3>
  )
}

export default SmallHeader