import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBook, faBookOpen, faEnvelope, faPhone, faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="main-footer">
      <section className="footer-container">
        <article className="footer-division">
          <div className="footer-description">
            <div className="footer-datos">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faRoute} />
                <h3>Dirección:</h3>
              </div>
              <p className="footer-text">Av. José Balta 581, Chiclayo 14001</p>
            </div>
            <div className="footer-datos">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
                <h3>Teléfono:</h3>
              </div>
              <p className="footer-text">+51 995-268-997</p>
            </div>
            <div className="footer-datos">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faEnvelope} />
                <h3>Correo:</h3>
              </div>
              <p className="footer-text">CompraOnline@Co-Licorería.com.pe</p>
            </div>
          </div>
        </article>
        <article className="footer-division-center">
          <div className="footer-description-center">
            <div className="footer-center-logo">
              <h3>Co-Licorería Ecommerce</h3>
              <div className="footer-logo-img">
                <img
                  src="https://i.ibb.co/2dCMdrv/lg-margarita.webp"
                  alt="Logo principal"
                />
              </div>
            </div>
            <div className="footer-center-icon">
              <div className="footer-center">
                <FontAwesomeIcon icon={faBook} />
                <h3>Libro de reclamaciones</h3>
              </div>
              <div className="footer-center">
                <FontAwesomeIcon icon={faBookOpen} />
                <h3>Ver estado de sus reclamo(s)/Queja(s)</h3>
              </div>
            </div>
          </div>
        </article>
        <article className="footer-division-redes">
          <div className="footer-description-redes">
            <div className="footer-text-redes">
              <h3>Síguenos en nuestras redes sociales:</h3>
            </div>
            <div className="footer-redes-icons">
              <div className="footer-redes">
                <FontAwesomeIcon icon={faFacebook} />
                <h3>Facebook</h3>
              </div>
              <div className="footer-redes">
                <FontAwesomeIcon icon={faInstagram} />
                <h3>Instagram</h3>
              </div>
              <div className="footer-redes">
                <FontAwesomeIcon icon={faYoutube} />
                <h3>YouTube</h3>
              </div>
            </div>
          </div>
        </article>
      </section>
    </footer>

  )
}
