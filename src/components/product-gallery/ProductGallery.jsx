import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard'
import axios from 'axios';
import Pagination from '../pagination/Pagination';
import { useUser } from '../../context/UserContext';

// const URL = import.meta.env.VITE_SERVER_URL;
const URL2 = import.meta.env.VITE_LOCAL_SERVER

export default function ProductGallery() {

  const { token, logout } = useUser()

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getProducts()
  }, [limit, token])

  async function getProducts(skip = 0) {
    try {

      //URL con mockapi

      // const res = await axios.get(`${URL}/products`)
      // console.log(res)
      // setProducts(res.data)

      //URL del backend

      const resProd = await axios.get(`${URL2}/products?skip=${skip}&limit=${limit}` ,{
        headers: {
          Authorization: token
        }
      })
      // console.log(resProd.data)
      setProducts(resProd.data.product)
      setTotal(resProd.data.total)

    } catch (error) {
      if(error.response?.status === 401){
        alert("Su sesion a caducado, debe registrarse nuevamente")
        logout()
        return
      }
      alert("Error al obtener productos")
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

      <select onChange={(evt) => setLimit(evt.target.value)}>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
      </select>

    </>
  )
}
