
/**
 * Divider has a default margin bottom of 0.5rem - override with className
 * @param className - classNames to additionally style the divider 
 */
const Divider = ({ black }: { black?: boolean }) => {
  const renderDivider = (): JSX.Element => {
    if (black) {
      return (
        <div className='' style={{ borderBottom: '4px solid rgba(5,10,4,8.1)' }}></div>
      )
    } else {
      return (
        <div className='my-8 mx-64' style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}></div>
      )
    }
  }

  return (
    <>
      {renderDivider()}
    </>
  )
}

export default Divider