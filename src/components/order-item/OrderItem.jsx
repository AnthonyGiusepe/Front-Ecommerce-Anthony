import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OrderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/OrderContext'

export default function OrderItem({ item }) {

  const {removeProduct, changeItemQuantity} = useOrder()

  return (
    <tr className="order-item">

      <td className='item-image'><img src={item.image} alt={item.name} /></td>
      <td className="item-info">{item.name}</td>
      <td className="item-price">S/. {item.price} </td>
      <td className="item-subtotal">S/. {item.price * item.quantity} </td>
      <td className="item-count">
        <input  className='item-input'
                type="number" 
                defaultValue={item.quantity} 
                min='1' 
                onChange={(e)=> changeItemQuantity(item, e.target.valueAsNumber)}/>
      </td>
      <td>
      <div className="item-actions">
        <button className='btn-trash btn-danger' onClick={()=> removeProduct(item.id)}>
        <FontAwesomeIcon icon={faTrash}/>
        </button>

      </div>
      </td>

    </tr>
  )
}
