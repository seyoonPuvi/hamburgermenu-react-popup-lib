import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="nav-bar-cont">
    <Link to="/" className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <div className="pop-cont">
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            type="button"
            aria-label="trigger"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="ham-icon" />
          </button>
        }
        overlayStyle={overlayStyles}
      >
        {close => (
          <>
            <ul className="popup-content">
              <button
                className="close-button"
                type="button"
                data-testid="closeButton"
                aria-label="trigger"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <li>
                <Link to="/" className="icon-cont">
                  <AiFillHome className="icon" />
                  <p className="text">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className="icon-cont">
                  <BsInfoCircleFill className="icon" />
                  <p className="text">About</p>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
