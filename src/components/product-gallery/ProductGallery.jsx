import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard'
import axios from 'axios';
import Pagination from '../pagination/Pagination';

// const URL = import.meta.env.VITE_SERVER_URL;
const URL2 = import.meta.env.VITE_LOCAL_SERVER

export default function ProductGallery() {

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(3)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getProducts()
  }, [limit])

  async function getProducts(skip = 0) {
    try {

      //URL con mockapi

      // const res = await axios.get(`${URL}/products`)
      // console.log(res)
      // setProducts(res.data)

      //URL del backend

      const resProd = await axios.get(`${URL2}/products?skip=${skip}&limit=${limit}`)
      console.log(resProd.data)
      setProducts(resProd.data.product)
      setTotal(resProd.data.total)

    } catch (error) {
      alert('Error al obtener productos')
      console.log(error)
    }
  }


  return (

    <>

      <section className="product-card-container">
        
          {
            products.map(producto => (<ProductCard key={producto._id} prod={producto} />))
          }
          

      </section>

      <Pagination total={total} limit={limit} getFunction={getProducts} />

      <select onChange={(evt)=> setLimit(evt.target.value)}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>

    </>
  )
}
