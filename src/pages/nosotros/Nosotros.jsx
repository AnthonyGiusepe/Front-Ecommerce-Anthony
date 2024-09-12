import './Nosotros.css'

export default function Nosotros() {
  return (
    <main className="about-container">
      <section className="about-section">
        <h1 className="section-title">Quienes Somos</h1>
        <div className="about-description">
          <div className="section-subtitle">
            <h2>Nosotros</h2>
          </div>
          <p className="about-text">
            Nos dedicamos a la venta de los mejores licores, nuestra{" "}
            <span>calidad y servicio</span>, ha sido siempre nuestro pilar, donde lo
            más importante, ha sido que todos nuestros clientes vivan una
            experiencia positiva a través de cada botella abierta. Aquí encontrarás
            todo lo que necesitas, desde whisky, pisco, vodka, ron, gin, tequila,
            hasta vino, con constantes <span>ofertas y promociones exclusivas</span>{" "}
            para nuestros clientes.
            <br />
            <br /> Nuestro <span>proceso de compra</span> es sencillo y seguro. Con
            solo unos clics, puedes agregar tus productos al carrito y elegir el
            método de pago que prefieras, ya sea contra entrega, con tarjeta de
            crédito o débito, Yape o depósito en cuenta. Aceptamos todos los medios
            de pago disponibles en Perú, para que disfrutes de tus momentos
            especiales donde quieras y cuando quieras. <br />
            <br />
            Apreciamos profundamente tu lealtad y preferencia, ya que nos brindan la
            oportunidad de expandirnos a través de nuevas plataformas. Aunque no
            estemos físicamente presentes en una tienda donde la recomendación y el
            trato son más directos, queremos que sepas que este sitio web ha pasado
            por diversas etapas para ofrecerte{" "}
            <span>la mejor experiencia posible.</span>
          </p>
        </div>
        <h1 className="section-title">Integrantes del Equipo</h1>
        <div className="about-developer">
          <div className="dev-description">
            <div className="dev-header">
              <h2 className="dev-header-name">
                Hola, soy <span>Anthony Castro.</span>
              </h2>
            </div>
            <div className="dev-body">
              <h2 className="dev-body-title">Acerca de mí:</h2>
              <p className="dev-body-text">
                Vivo en Perú, tengo 26 años, me gusta la programación, ir al
                gimnasio y leer mangas.
              </p>
              <h2 className="dev-body-title">Cursos:</h2>
              <p>
                Actualmente, estoy llevando un curso de programación FullStack Web
                Developer, donde puedo explorar el desarrollo web desde diferentes
                ángulos.
              </p>
            </div>
            <div className="dev-redes">
              <h2 className="dev-redes-title">Redes sociales</h2>
              <div className="dev-redes-sociales">
                <div className="dev-redes-border">
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <div className="dev-redes-border">
                  <i className="fa-brands fa-facebook" />
                </div>
                <div className="dev-redes-border">
                  <i className="fa-brands fa-instagram" />
                </div>
                <div className="dev-redes-border">
                  <i className="fa-brands fa-twitter" />
                </div>
              </div>
            </div>
            <div className="dev-footer">
              <h2 className="dev-footer-title">Herramientas aprendidas:</h2>
              <div className="dev-footer-tools">
                <div className="dev-footer-circle">HTML</div>
                <div className="dev-footer-circle">CSS</div>
                <div className="dev-footer-circle">JS</div>
              </div>
            </div>
          </div>
          <div className="dev-img">
            <img src="/src/image/Img-perfil.jpg" alt="Perfil" />
          </div>
        </div>
      </section>
    </main>

  )
}
