import SectionHeader from './SectionHeader'

const AwayBanner = () => {
  return (
    <div className='text-center flex flex-col items-center' style={{
      backgroundColor: '#282828'
    }}>
      <div className='lg:text-xl md:text-xl sm:text-sm font-sans my-2 text-xs text-white'>
        <span role="img" aria-label="sheep">🌞 Redaktionen har sommarledigt. Två avsnitt släpps varje vecka så behåll er patreon. Tillbaka 19 Augusti 🌞</span>
      </div>
    </div>
  )
}

export default AwayBanner 
