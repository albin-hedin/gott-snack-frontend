import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Menu
      onClose={() => setMenuOpen(false)}
      onOpen={() => setMenuOpen(true)}
      isOpen={menuOpen}
      width={300}>
      <Link onClick={() => setMenuOpen(false)} id="home" className="menu-item" href="/">Home</Link>
      <Link onClick={() => setMenuOpen(false)} id="contact" className="menu-item" href="/gottsnackteam">Hela gänget</Link>
    </Menu>
  )
}

export default HamburgerMenu
