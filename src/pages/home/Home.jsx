import ProductGallery from "../../components/product-gallery/ProductGallery";

export default function Home() {
  return (
    <>
    
      <section className="banner-container">
        <div className="product-banner">
          <h1>Bienvenido a Co-Licorería</h1>
          <div className="banner-msj">
            <h3 className="banner-frase">
              Tomar bebidas alcohólicas en exceso es dañino <br /> Está prohibida la
              venta de alcohol a menores de 18 años{" "}
            </h3>
          </div>
          <a href="#titulo interno">Ver Productos</a>
        </div>
      </section>

      <div id="titulo interno" className="main-container">

        <section className="product-section">
          
          <h1 className="section-title">Licores destacados</h1>
          <div className="section-subtitle">
            <h2>LOS MEJORES LICORES, MARCAS Y PRECIOS EN UN SOLO LUGAR.</h2>
          </div>

          <ProductGallery />
          
        </section>

        {/* ======= SECTION CARACTERISTICAS DEL SERVICIO ======= */}
        <section className="service-features">
          <article className="feature">
            <img
              className="feature-image"
              src="/src/image/Icons/icon-tienda.svg"
              alt="Recojo tienda"
            />
            <div className="feature-description">
              <span>
                Recojo en <br /> tienda
              </span>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </article>
          <article className="feature">
            <img
              className="feature-image"
              src="/src/image/Icons/icon-delivery.svg"
              alt="delivery"
            />
            <div className="feature-description">
              <span>
                Delivery <br /> Programado
              </span>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </article>
          <article className="feature">
            <img
              className="feature-image"
              src="/src/image/Icons/pos-svgrepo-com.svg"
              alt="metodos de pago"
            />
            <div className="feature-description">
              <span>
                Metodos de <br /> Pago
              </span>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </article>
        </section>
        {/* ======= SECTION CARACTERISTICAS DEL SERVICIO END ======= */}
      </div>

    </>




  )
}
