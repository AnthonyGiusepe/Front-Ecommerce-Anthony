import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import './AdminProduct.css'
import AdminTable from "../../components/admin-table/AdminTable";
import Swal from "sweetalert2";
import Pagination from "../../components/pagination/Pagination";

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function AdminProduct() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  //Para la paginacion
  const [limit, setLimit] = useState(5)
  const [total, setTotal] = useState(0)
  //estado para manejar la edicion de los productos
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { register, setValue, reset, handleSubmit, formState: { errors, isValid } } = useForm();

  useEffect(() => {
    getProducts()
    getCategories()
  }, [limit])

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

  async function getCategories() {
    try {

      const response = await axios.get(`${URL}/categories`)
      console.log(response)
      setCategories(response.data.category)

    } catch (error) {
      console.log(error)
      alert("No se pudieron cargar las categorias")
    }
  }

  async function getProducts(skip = 0) {

    try {
      //carga de productos

      const res = await axios.get(`${URL}/products?skip=${skip}&limit=${limit}`)
      console.log(res.data)

      const newProduct = res.data.product
      setProducts(newProduct)

      setTotal(res.data.total)

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

    try {

      const formData = new FormData()

      formData.append("name", producto.name)
      formData.append("price", producto.price)
      formData.append("description", producto.description)
      formData.append("category", producto.category)
      formData.append("createdAt", producto.createdAt)

      if (producto.image[0]) {
        formData.append("image", producto.image[0])
      }

      if (selectedProduct) {
        const { _id: id } = selectedProduct;
        const res = await axios.put(`${URL}/products/${id}`, formData)

        console.log(res.data)

        Swal.fire({
          title: 'Actualizacion correcta',
          text: 'El producto fue actualizado correctamente',
          icon: 'success',
          timer: 1500
        })

        setSelectedProduct(null)


      } else {

        const res = await axios.post(`${URL}/products`, formData)
        console.log(res.data)

        Swal.fire({
          title: 'Producto creado',
          text: 'El producto fue creado correctamente',
          icon: 'success',
          timer: 1500
        })

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
          <h1 className="titleproduct">
            {
              selectedProduct ? 'Editar producto' : 'Crear Producto'
            }
          </h1>
          <form onSubmit={handleSubmit(onProductSubmit)}>

            <div className="adminForm">
              
              <div className="input-group">

                <label htmlFor="name">Nombre Producto <span className="llenar">*</span></label>
                <input type="text"
                  id="name"
                  {...register("name", { required: true, minLength: 3 })
                  } style={{ textTransform: 'uppercase' }} />

                {errors.name?.type === 'required' && <div className="input-error">El campo es requerido</div>}
                {errors.name?.type === 'minLength' && <div className="input-error">Minimo Caracteres es 3</div>}

              </div>

              <div className="input-group">

                <label htmlFor="">Precio <span className="llenar">*</span></label>
                <input type="number" {...register("price", { required: true, minLength: 1 })} />

                {errors.price?.type === 'required' && <div className="input-error">El campo es requerido</div>}
                {errors.price?.type === 'minLength' && <div className="input-error">Ingresa un precio</div>}

              </div>

              <div className="input-group">

                <label htmlFor="description">Descripción <span className="llenar">*</span></label>
                <textarea {...register("description", { required: true, minLength: 2, maxLength: 300 })} rows={5} />

                {errors.description?.type === 'required' && <div className="input-error">El campo es requerido</div>}
                {errors.description?.type === 'minLength' && <div className="input-error">Ingresa un precio</div>}
                {errors.description?.type === 'maxLength' && <div className="input-error">Excediste el número de Caracteres</div>}

              </div>

              <div className="input-group">

                <label htmlFor="">Categoria <span className="llenar">*</span></label>
                <select  {...register("category", { required: true })}>

                  {
                    categories.map(cat => (
                      <option key={cat._id} value={cat.name}>{cat.viewValue}</option>
                    ))
                  }

                  {/* <option value="Whisky">Whisky</option>
                  <option value="Ron">Ron</option>
                  <option value="Pisco">Pisco</option>
                  <option value="Gin">Gin</option>
                  <option value="Vodka">Vodka</option>
                  <option value="Tequila">Tequila</option> */}

                </select>

                {errors.category && <div className="input-error">El campo es requerido</div>}

              </div>

              <div className="input-group">

                <label htmlFor="createdAt">Fecha de ingreso <span className="llenar">*</span></label>
                <input type="date" {...register("createdAt", { required: true })} />

                {errors.category && <div className="input-error">El campo es requerido</div>}

              </div>

              <div className="input-group">

                <label htmlFor="">Agregar Imagen <span className="llenar">*</span></label>
                <input accept="image/*" type="file" {...register("image", { required: true })} />

                {errors.category && <div className="input-error">El campo es requerido</div>}

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
          <Pagination total={total} limit={limit} getFunction={getProducts} />

          <select onChange={(evt) => setLimit(evt.target.value)}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

    </>
  )
}
