
/**
 * Divider has a default margin bottom of 0.5rem - override with className
 * @param className - classNames to additionally style the divider 
 */
const Divider = ({className}: {className?: string}) => {
  return (
    <div className={`${className ? className : ''}`  || undefined} style={{borderBottom: '1px solid rgba(0,0,0,0.1)'}}></div>
  )
}

export default Divider