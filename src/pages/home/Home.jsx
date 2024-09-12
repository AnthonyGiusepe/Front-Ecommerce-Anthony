
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
          <div className="product-card-container">
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img src="/src/image/img-bluelabel.png" alt="Blue Label" />
                  <button className="btn-quickview">
                    <a href="/Pages/detail-product.html">Ver más</a>
                  </button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">Whisky JOHNNIE WALKER Blue Label Botella 750ml</a>
              </div>
              <div className="product-price-date">
                <div className="product-date">17 de mayo del 2024</div>
                <div className="product-normal-price">S/. 950.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img src="/src/image/img-jackdaniels.png" alt="JACK DANIEL'S" />
                  <button className="btn-quickview">Ver más</button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">Whisky JACK DANIELS Honey Botella 750ml</a>
              </div>
              <div className="product-price-date">
                <div className="product-date">5 de mayo del 2024</div>
                <div className="product-normal-price">S/. 89.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img src="/src/image/img-shivasregal.webp" alt="CHIVAS REGAL" />
                  <button className="btn-quickview">Ver más</button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">Whisky CHIVAS REGAL 18 Años Botella 750ml</a>
              </div>
              <div className="product-price-date">
                <div className="product-date">29 de abril del 2024</div>
                <div className="product-normal-price">S/. 210.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img src="/src/image/img-ballantines.png" alt="BALLANTINES" />
                  <button className="btn-quickview">Ver más</button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">WHISKY BALLANTINES FINEST 12 AÑOS BOTELLA 750ML</a>
              </div>
              <div className="product-price-date">
                <div className="product-date">1 de mayo del 2024</div>
                <div className="product-normal-price">S/. 91.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img src="/src/image/img-tequila.png" alt="TequilaJoseCuervo" />
                  <button className="btn-quickview">Ver más</button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">Tequila JOSE CUERVO 1800 Reposado Botella 750ml</a>
              </div>
              <div className="product-price-date">
                <div className="product-date">16 de mayo del 2024</div>
                <div className="product-normal-price">S/. 95.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img src="/src/image/img-flordecaña.png" alt="FLOR DE CAÑA" />
                  <button className="btn-quickview">Ver más</button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">RON FLOR DE CAÑA 7 AÑOS BOTELLA 750ML</a>
              </div>
              <div className="product-price-date">
                <div className="product-date"> 24 de abril del 2024</div>
                <div className="product-normal-price">S/. 82.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img
                    src="/src/image/img-tequilajosecuervo.png"
                    alt="Tequila Jose cuervo"
                  />
                  <button className="btn-quickview">Ver más</button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">JIMADOR RUBIO REPOSADO BOTELLA 750 ML</a>
              </div>
              <div className="product-price-date">
                <div className="product-date">16 de mayo del 2024</div>
                <div className="product-normal-price">S/. 79.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
            <article className="product-card">
              <div className="card-header">
                <div className="product-image">
                  <img src="/src/image/img-vodka.webp" alt="Vodka ABSOLUT" />
                  <button className="btn-quickview">Ver más</button>
                </div>
              </div>
              <div className="product-name">
                <a href="#">Vodka ABSOLUT Botella 700ml</a>
              </div>
              <div className="product-price-date">
                <div className="product-date">17 de abril del 2024</div>
                <div className="product-normal-price">S/. 60.00</div>
              </div>
              <div className="button-footer">
                <button className="btn-buy">Comprar Producto</button>
              </div>
            </article>
          </div>
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
