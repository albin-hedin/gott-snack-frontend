const SectionHeader = ({ text }: { text: string }) => {
  return (
    <h2 className='lg:text-5xl md:text-4xl text-2xl roboto-font my-2 text-white'>
      {text}
    </h2>
  )
}

export default SectionHeader