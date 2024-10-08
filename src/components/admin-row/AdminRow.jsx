import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './AdminRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AdminRow({ producto, deleteProduct, handleEditProduct }) {


  return (
    <tr className="admin-table-row">
      <td className="image"> <img src={producto.image} alt={producto.name} /> </td>
      <td className="name"> {producto.name} </td>
      <td className="description">
        <div className="description-container">
          {producto.description}
        </div>
      </td>
      <td className="price"> S/. {producto.price} </td>
      <td className="category"> {producto.category} </td>
      <td className="date"> {producto.createdAt} </td>
      <td className="actions">
        <div className="actions-container">
          <button onClick={()=> handleEditProduct(producto)}><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button onClick={ ()=> deleteProduct(producto.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
      </td>
    </tr>
  )
}
