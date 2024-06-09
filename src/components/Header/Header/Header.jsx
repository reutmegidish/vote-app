// import DropdownMenu from '../DropdownMenu/DropdownMenu'

import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-icon-container">
        <img src="./images/logo2.png" alt="logo" className="header-icon" />
      </div>
      {/* <div className="drop-down-container">
        <DropdownMenu />
      </div> */}
    </header>
  )
}

export default Header
