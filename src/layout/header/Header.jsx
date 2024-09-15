import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (

    <header className="main-header">
      {/* Burger menu */}
      <input type="checkbox" id="responsive-menu" className="input-burger" />
      <label className="burger-menu" htmlFor="responsive-menu">
        <div className="burger-line" />
      </label>
      {/* Main header left */}
      <div className="container-header-left">
        <NavLink className="main-logo" to='/'>
          <img
            className="main-logo-img"
            src="/src/image/Icons/lg-margarita.webp"
            alt="Logo principal"
          />
        </NavLink>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className='nav-link' to='/'>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/register'>
                Registro
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/contact'>
                Contactanos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/nosotros'>
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='admin-product'>
              Admin-Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="user-info">
        <span className="user-name">Anthony</span>
        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} data-count={4} />
      </div>
    </header>

  )
}
