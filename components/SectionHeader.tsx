const SectionHeader = ({ text }: { text: string }) => {
  return (
    <h1 className='lg:text-5xl md:text-4xl text-2xl roboto-font my-2 text-white'>
      {text}
    </h1>
  )
}

export default SectionHeader