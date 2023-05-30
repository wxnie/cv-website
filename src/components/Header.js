import { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../assets/img/logo.svg'

function Header() {
  const menuItems = [
    {id: 1, text: 'Experience', link: 'experience'},
    {id: 2, text: 'Projects', link: 'projects'},
    {id: 3, text: 'Contact', link: 'contact'},
  ]

  const [activeIndex, setActiveIndex] = useState()

  const [open, setOpen] = useState(false)

  const currentMod = open ? 'active' : 'default';

  const handleClick = () => {
    setOpen(current => !current)
  }

  const changeActive = (num) => () => {
    setActiveIndex(num)
  }


  return (
    <header className="header d-md-flex align-items-center justify-content-between">
      <div className="header__logo-wrap d-flex justify-content-between align-items-center">
        <img className="header__logo" src={logo} alt="logo"/>
        <span onClick={handleClick} className={`header__hamburger-wrap header__hamburger-wrap--${currentMod} d-md-none d-flex align-items-center`}>
          <span className="header__hamburger"></span>
        </span>
      </div>
      <nav className={`header__nav header__nav--${currentMod}`}>
        <ul className="header__list d-flex flex-column flex-md-row align-items-center">
          {menuItems.map((menuItem, index) => {
            const ClassMod = activeIndex === index ? 'active' : 'default'
            return (
              <li key={menuItem.id} className={`header__item header__item--${ClassMod}`}>
                <Link
                  onClick={changeActive(index)}
                  to={menuItem.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="header__link"
                >
                  {menuItem.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header