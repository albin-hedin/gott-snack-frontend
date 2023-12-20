import SectionHeader from './SectionHeader'

const AwayBanner = () => {
  return (
    <div className='text-center flex flex-col items-center' style={{
      backgroundColor: '#282828'
    }}>
      <div className='lg:text-xl md:text-xl sm:text-sm font-sans my-2 text-xs text-white'>
        <span role="img" aria-label="sheep">🎅🏼Redaktionen tar julledigt 23 december. Tillbaka 8 januari🎅🏼</span>
      </div>
    </div>
  )
}

export default AwayBanner 
