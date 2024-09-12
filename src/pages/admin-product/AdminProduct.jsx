import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import './AdminProduct.css'
import AdminTable from "../../components/admin-table/AdminTable";
import Swal from "sweetalert2";

const URL = 'https://66cd01338ca9aa6c8cc93b35.mockapi.io/api/v1'

export default function AdminProduct() {

  const [products, setProducts] = useState([]);
  //estado para manejar la edicion de los productos
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { register, setValue, reset, handleSubmit, formState: { errors, isValid } } = useForm();

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {

    if (selectedProduct) {

      setValue('name', selectedProduct.name)
      setValue('price', selectedProduct.price)
      setValue('description', selectedProduct.description)
      setValue('image', selectedProduct.image)
      setValue('category', selectedProduct.category)
      setValue('createdAt', selectedProduct.createdAt)

      // reset({
      //   name: selectedProduct.name,
      //   price: selectedProduct.price,
      //   description: selectedProduct.description,
      //   image: selectedProduct.image,
      //   category: selectedProduct.category,
      //   createdAt: selectedProduct.createdAt
      // })
    } else {
      reset()
    }


  }, [selectedProduct, setValue, reset])

  async function getProducts() {

    try {
      //carga de productos

      const res = await axios.get(`${URL}/products`)
      console.log(res.data)

      const newProduct = res.data
      setProducts(newProduct)

    } catch (error) {
      console.log(error)
    }
  }

  function deleteProduct(id) {

    Swal.fire({
      title: 'Desea borrar producto',
      text: 'Realmente desea borrar este producto',
      icon: 'warning',
      showConfirmButton: true,
      reverseButtons: true,
      showCancelButton: true,
    }).then(async (res) => {
      try {
        if (res.isConfirmed) {
          const res = await axios.delete(`${URL}/products/${id}`)
          console.log(res)

          getProducts();
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          title: 'Error al borrar',
          text: 'El producto no fue borrado',
          icon: 'error'
        })
      }
    })
  }


  async function onProductSubmit(producto) {
    console.log(producto)

    try {

      if (selectedProduct) {
        const { id } = selectedProduct;
        const res = await axios.put(`${URL}/products/${id}`, producto)
        console.log(res.data)

        Swal.fire({
          title: 'Actualizacion correcta',
          text: 'El producto fue actualizado correctamente',
          icon: 'success',
          timer: 1500
        })

        setSelectedProduct(null)


      } else {

        const res = await axios.post(`${URL}/products`, producto)
        console.log(res.data)
        reset()
      }

      getProducts()


    } catch (error) {
      console.log(error)
    }

  }

  function handleEditProduct(producto) {

    console.log('Producto a editar', producto)
    setSelectedProduct(producto)
    // setValue('name', producto.name)
    // setValue('price', producto.price)
    // setValue('name', producto.name)


  }

  return (
    <>

      <div className="admin-container-product">
        <div className="form-container-product">
          <h1>AdminProduct</h1>
          <form onSubmit={handleSubmit(onProductSubmit)}>

            <div className="adminForm">
              <div className="input-group">
                <label htmlFor="name">Nombre Producto</label>
                <input type="text"
                  id="name"
                  {...register("name", { required: true, minLength: 3 })
                  } />

                {errors.name?.type === 'required' && <div className="input-error">El campo es requerido</div>}
                {errors.name?.type === 'minLength' && <div className="input-error">Minimo Caracteres es 3</div>}

              </div>

              <div className="input-group">

                <label htmlFor="">Precio</label>
                <input type="number" {...register("price", { required: true })} />

                {errors.price && <div className="input-error">El campo es requerido</div>}

              </div>

              <div className="input-group">
                <label htmlFor="description">Descripcion</label>
                <textarea {...register("description")} rows={5} />
              </div>

              <div className="input-group">
                <label htmlFor="">Categoria</label>
                <select  {...register("category")}>/
                  <option value="Consolas">Consolas Video Juegos</option>
                  <option value="games">Juegos</option>
                  <option value="devices">Accesorios</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="createdAt">Fecha de ingreso</label>
                <input type="date" {...register("createdAt")} />

              </div>

              <div className="input-group">
                <label htmlFor="">Agregar Imagen</label>
                <input type="url" {...register("image")} />

              </div>

              <div className="input-group">

                <button className={`btn ${selectedProduct && 'btn-success'}`}
                  type="submit"
                  disabled={!isValid}  >

                  {
                    selectedProduct ? 'Editar' : 'Crear'
                  }

                </button>

              </div>
            </div>

          </form>
        </div>
        <div className="table-container-product">
          <AdminTable products={products}
            deleteProduct={deleteProduct}
            handleEditProduct={handleEditProduct}
          />
        </div>
      </div>

    </>
  )
}
