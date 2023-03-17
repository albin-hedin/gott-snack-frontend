const SectionHeader = ({ text }: { text: string }) => {
  return (
    <h1 style={{
      color: 'rgb(116, 114, 114)'
    }} className='lg:text-5xl md:text-4xl text-2xl roboto-font mb-3'>
      {text}
    </h1>
  )
}

export default SectionHeader