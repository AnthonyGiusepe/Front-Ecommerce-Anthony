
import { NavLink, useParams } from "react-router-dom"
import './ProductDetail.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { useOrder } from "../../context/OrderContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import ProductGallery from "../../components/product-gallery/ProductGallery"

const URL = import.meta.env.VITE_SERVER_URL

export default function ProductDetail() {

  const { addProduct, changeItemQuantity, order } = useOrder();


  const [product, setproduct] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getProduct()

  }, [order])

  async function getProduct() {
    try {
      const res = await axios.get(`${URL}/products/${id}`)
      const temp = order.find(p => p.id === id)

      res.data.quantity = temp?.quantity ?? 0;
      console.log(res.data)
      setproduct(res.data)
    } catch (error) {
      console.log(error)
      alert("Error al obtener el producto")
    }

  }


  if (!product) {
    return <h5>cargando...</h5>
  }

  return (

    <>
      <main className="detail-container">
        <section className="detail-section">
          <div className="section-subtitle">
            <div>
              <NavLink className="subtitle-text" to='/'>Inicio</NavLink> / <span className="subtitle-product">{product.name}</span>
            </div>
          </div>
          <div className="product-container">
            <div className="detail-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="detail-description">
              <h1 className="detail-name">
                WHISKY JOHNNIE WALKER BLUE LABEL BOTELLA 750ML
              </h1>
              <div className="detail-price">S/. {product.price}</div>
              <div className="detail-reseña">
                <div className="detail-category">2 reseñas</div>
                <div className="detail-review">
                  {/* Estrellas usando fontsawesome */}
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="detail-quantity-container">
                <div className="detaile-quantity-name">cantidad</div>
                <div className="detail-add">

                  <input className='item-input'
                    type="number"
                    defaultValue={product?.quantity}
                    min='1'
                    onChange={(e) => changeItemQuantity(product, e.target.valueAsNumber)} />

                  <div className="detail-btn">
                    <button onClick={() => addProduct(product)}>Añadir al carrito</button>
                  </div>

                </div>
              </div>

              <div className="detail-footer">
                <div className="detail-footer-text-1">
                  <i className="fa-solid fa-check" /> Retiro disponible en
                  Co-Licorerías
                </div>
                <div className="detail-footer-text-2">
                  Normalmente, está listo en 2 horas
                </div>
                <div className="detail-footer-description">
                  <div className="detail-buyname">
                    Compra Ahora
                  </div>
                  <div className="detail-desciption-text">
                    {product.description}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>

  )
}
