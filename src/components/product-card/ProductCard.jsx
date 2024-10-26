
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useOrder } from '../../context/OrderContext'
import { formatDate } from '../../../utils/formatDate'

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function ProductCard({ prod }) {

  const { addProduct } = useOrder()

  return (
    <>

      <div className='product-card'>

        <div className="card-header">

          <div className="product-image">

            <img src={`${URL}/images/products/${prod.image}`} alt={prod.name} />

            <div className='product-category'>
              {prod.category}
            </div>

            <NavLink to={`/product-detail/${prod._id}`} className="product-btn">

              <button className="btn-quickview">
                Ver más <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>

            </NavLink>


          </div>

        </div>

        <div className="product-name">
          <a href="#">{prod.name}</a>
        </div>

        <div className="product-price-date">
          <div className="product-date">{formatDate(prod.createdAt)}</div>
          <div className="product-normal-price">S/. {prod.price}.00</div>
        </div>

        <div className="button-footer">
          <button className="btn-buy" onClick={() => addProduct(prod)}>
            <div>Comprar Producto</div>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>

      </div>

    </>

  )
}
