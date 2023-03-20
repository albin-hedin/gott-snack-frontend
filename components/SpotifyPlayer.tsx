const SpotifyPlayer = () => {
  return (
    <iframe
      className='shadow-2xl rounded-lg'
      style={{
        borderRadius: '12px'
      }}
      src="https://open.spotify.com/embed/show/7zjIQSVKHF2GooMVDC92T6?utm_source=generator&theme=0"
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  )
}

export default SpotifyPlayer