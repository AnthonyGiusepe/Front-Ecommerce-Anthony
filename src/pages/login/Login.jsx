import { NavLink } from 'react-router-dom'
import './Login.css'
import { useForm } from 'react-hook-form'
import { useUser } from '../../context/UserContext'


export default function Login() {

  const { register, handleSubmit } = useForm()
  const { login } = useUser()

  // function handleLogin(data) {
    
  //   login(data)

  // }

  return (
    <>

      <main className="Login-container">
        <section className="Login-register">
          <h1 className="section-title">ACCESO</h1>
          <h2 className="section-subtitle">
            Por favor, introduzca su correo electrónico y contraseña:
          </h2>
          <div className="login-form">
            <form onSubmit={handleSubmit(login)}>
              <div className="input-container">
                <label htmlFor="email">
                  Dirección de correo electrónico <span className="llenar">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Correo Electronico"
                  pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"

                  {...register("email", { required: "El email es requerido" })}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">
                  Contraseña <span className="llenar">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"

                  {...register("password", {
                    required: "El password es requerido",
                    minLength: {
                      value: 4,
                      message: "El email debe tener al menos 4 caracteres"
                    }
                  })
                  }
                />
              </div>
              <div className="input-container">
                <button type="submit">Acceder</button>
              </div>
            </form>
            <div className="form-cuenta">
              <h4>¿Nuevo Cliente?</h4>
              <NavLink to='/register'>Crear una cuenta</NavLink>
            </div>
          </div>
        </section>
      </main>

      <div className="register-advertencia">
        <h2 className="advertencia-frase1">
          Tomar bebidas alcohólicas en exceso es dañino
        </h2>
        <br />
        <span className="advertencia-frase2">
          Está prohibida la venta de alcohol a menores de 18 años
        </span>
      </div>

    </>

  )
}
