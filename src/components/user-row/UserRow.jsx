import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UserRow.css'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function UserRow({ user, deleteUser, handleEditUser }) {
  return (
    <tr className="admin-user-row">
      <td className="image"> <img src={`${URL}/images/users/${user.image}`} alt={user.name} /> </td>
      <td className="name"> {user.name} </td>
      <td className="mail"> {user.email} </td>
      <td className="date"> {user.date} </td>
      <td className="country"> {user.country} </td>
      <td className="actions">
        <div className="actions-container">
          <button onClick={() => handleEditUser(user)}><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button onClick={() => deleteUser(user._id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
      </td>
    </tr>
  )
}
