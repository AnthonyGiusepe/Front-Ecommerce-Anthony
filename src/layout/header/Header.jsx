import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import userImg from "/src/image/default-user.jpeg"
import { useOrder } from "../../context/OrderContext";

export default function Header() {

  const { setToggleModal, count } = useOrder()

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
            <li className="nav-item">
              <NavLink className='nav-link' to='admin-user'>
                Admin-User
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="user-info">
        <div className="cart-icon">

          <div className="order-count">{count}</div>

          <FontAwesomeIcon icon={faCartShopping}
            onClick={() => setToggleModal(estado => !estado)} />

        </div>

        <div className="avatar">
          <img src={userImg} alt="user" />
        </div>
      </div>
    </header>

  )
}
// <button onClick={()=> setToggleModal(!toggleModal)}>Ver Carrito</button>