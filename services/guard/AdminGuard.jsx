import { Navigate } from "react-router-dom"
import { useUser } from "../../src/context/UserContext"

export default function AdminGuard({children}) {

    const { user } = useUser()

    return user?.role === "admin" ? children : <Navigate to="/" replace/>

}
