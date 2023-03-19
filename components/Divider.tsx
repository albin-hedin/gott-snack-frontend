
/**
 * Divider has a default margin bottom of 0.5rem - override with className
 * @param className - classNames to additionally style the divider 
 */
const Divider = () => {
  return (
    <div className='my-8 mx-64' style={{borderBottom: '1px solid rgba(0,0,0,0.1)'}}></div>
  )
}

export default Divider