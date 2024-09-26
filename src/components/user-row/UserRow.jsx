import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UserRow.css'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function UserRow({ user, deleteUser, handleEditUser }) {
  return (
    <tr className="admin-user-row">
      <td className="image"> <img src={user.image} alt={user.name} /> </td>
      <td className="name"> {user.name} </td>
      <td className="mail"> {user.mail} </td>
      <td className="password"> {user.password} </td>
      <td className="repeatpassword"> {user.repeatpassword} </td>
      <td className="date"> {user.date} </td>
      <td className="country"> {user.country} </td>
      <td className="actions">
        <div className="actions-container">
          <button onClick={() => handleEditUser(user)}><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button onClick={() => deleteUser(user.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
      </td>
    </tr>
  )
}
