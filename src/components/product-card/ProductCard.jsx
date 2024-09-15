
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useOrder } from '../../context/OrderContext'

export default function ProductCard({ prod }) {

  const { addProduct } = useOrder()

  return (
    <>

      <article>

        <div className="card-header">
          <div className="product-image">
            <img src={prod.image} alt={prod.name} />
            <div className='product-category'>
              {prod.category}
            </div>
            <button className="btn-quickview">
              Ver más
              <NavLink to={`/product-detail/${prod.id}`} className="product-btn">
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </NavLink>
            </button>
          </div>

        </div>

        <div className="product-name">
          <a href="#">{prod.name}</a>
        </div>
        <div className="product-price-date">
          <div className="product-date">{prod.createdAt}</div>
          <div className="product-normal-price">{prod.price}</div>
        </div>
        <div className="button-footer">
          <button className="btn-buy" onClick={() => addProduct(prod)}>
            <div>Comprar Producto</div>
            <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
      </article>

    </>

  )
}
