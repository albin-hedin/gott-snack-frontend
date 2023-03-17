import packageData from '../../gott-snack-frontend/package.json'

const Footer = () => {
  return (
    <footer className="paddingX flex pt-12 pb-6 justify-between">
      <div>
        &copy; Bing bong AB
      </div>
      <div className=''>
        v.{packageData.version}
      </div>

      <div className="">
        <a target="_blank" href="https://gott-snack.mixlr.com/">
          Gott snack på MIXLR
        </a>
      </div>
    </footer>
  )
}

export default Footer
