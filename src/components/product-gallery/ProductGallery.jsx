import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard'
import './ProductGallery.css'
import axios from 'axios';

const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductGallery() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {

      const res = await axios.get(`${URL}/products`)
      console.log(res)
      setProducts(res.data)

    } catch (error) {
      alert('Error al obtener productos')
      console.log(error)
    }
  }


  return (
    <section className="product-gallery">

      <h2>Lista de productos</h2>

      <div className="product-gallery__container">
        {
          products.map(producto => (<ProductCard key={producto.id} prod={producto} />))
        }
      </div>

    </section>
  )
}
