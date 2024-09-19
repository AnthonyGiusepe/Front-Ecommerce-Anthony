import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OrderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/OrderContext'

export default function OrderItem({ item }) {

  const {removeProduct, changeItemQuantity} = useOrder()

  return (
    <li className="order-item" key={item.id}>
      <div className='item-image'>
        <img src={item.image} alt="" />
      </div>
      <div className="item-info">
        {item.name}
      </div>
      <div className="item-price">
        S/. {item.price}
      </div>
      <div className="item-subtotal">
        S/. {item.price * item.quantity}
      </div>
      <div className="item-count">
        <input  className='item-input'
                type="number" 
                defaultValue={item.quantity} 
                min='1' 
                onChange={(e)=> changeItemQuantity(item, e.target.valueAsNumber)}/>
      </div>
      <div className="item-actions">
        <button className='btn-trash btn-danger' onClick={()=> removeProduct(item.id)}>
        <FontAwesomeIcon icon={faTrash}/>
        </button>

      </div>
    </li>
  )
}
