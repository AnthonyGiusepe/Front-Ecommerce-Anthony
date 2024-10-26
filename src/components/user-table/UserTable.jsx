import UserRow from '../user-row/UserRow'
import './UserTable.css'

export default function UserTable({ users, deleteUser, handleEditUser }) {
  return (
    <table className="admin-table-user">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Usuario</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Nacimiento</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>

      </thead>
      <tbody>
        {
          users.map(user => {
            return <UserRow key={user._id}
              user={user}
              deleteUser={deleteUser}
              handleEditUser={handleEditUser} />
          })
        }
      </tbody>

    </table>
  )
}
