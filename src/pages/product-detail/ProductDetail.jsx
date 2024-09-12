
import { useParams } from "react-router-dom"
import './ProductDetail.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { useOrder } from "../../context/OrderContext"

const URL = import.meta.env.VITE_SERVER_URL

export default function ProductDetail() {

  const { addProduct } = useOrder();

  const [product, setproduct] = useState([])

  const {id} = useParams()

  useEffect(()=>{
    getProduct()
  },[])

  async function getProduct() {
    try {
      const res = await axios.get(`${URL}/products/${id}`)
      console.log(res)
      setproduct(res.data)

      
    } catch (error) {
      console.log(error)
      alert("Error al obtener el producto")
    }
    
  }

  if(!product){
    return <h5>cargando...</h5>
  }

  return (

    <div className="product-detail-container">
      <h1> {product.name} </h1>
      <button onClick={()=> addProduct(product)}>Agregar al carrito</button>
    </div>
  )
}
