import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <section className="product-contact">
          <h1 className="section-title">Contacto</h1>
          <h2 className="section-subtitle">
            ¡Cotiza ahora y aprovecha los mejores precios del mercado!
          </h2>
          <div className="division-contac">
            <div className="contact-form">
              <h2 className="contact-form-title">Formulario contacto</h2>
              <form>
                <div className="input-group">
                  <label htmlFor="fullname" className="input-label">
                    Nombre Completo <span className="llenar">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    required=""
                    autoFocus=""
                    minLength={3}
                    maxLength={50}
                    placeholder="Nombre"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="input-label">
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
                <div className="input-group">
                  <label htmlFor="text">Escribe un mensaje</label>
                  <textarea
                    name="text"
                    id="text"
                    rows={5}
                    cols={30}
                    defaultValue={""}
                  />
                </div>
                <div className="input-group">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
            <div className="contact-map">
              <h2 className="contact-form-title-map">¿Dónde estamos ubicados?</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.9859980894282!2d-79.84011096125859!3d-6.773262734815019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef2850f54f5f%3A0xc3b46e3b4edba864!2sAv.%20Jos%C3%A9%20Balta%20581%2C%20Chiclayo%2014001!5e0!3m2!1ses-419!2spe!4v1716163396527!5m2!1ses-419!2spe"
                width="90%"
                height="80%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </>


  )
}
