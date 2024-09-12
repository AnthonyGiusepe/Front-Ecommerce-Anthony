import { NavLink } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <>

      <main className="Login-container">
        <section className="Login-register">
          <h1 className="section-title">ACCESO</h1>
          <h2 className="section-subtitle">
            Por favor, introduzca su correo electrónico y contraseña:
          </h2>
          <div className="login-form">
            <form>
              <div className="input-container">
                <label htmlFor="email">
                  Dirección de correo electrónico <span className="llenar">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required=""
                  minLength={5}
                  maxLength={100}
                  placeholder="Correo"
                  pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">
                  Contraseña <span className="llenar">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required=""
                  minLength={4}
                  maxLength={50}
                  placeholder="Contraseña"
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
