import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import Swal from 'sweetalert2';
import { useUser } from './UserContext';
import axios from 'axios';

const URL = import.meta.env.VITE_LOCAL_SERVER

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }) {

    const { user } = useUser()

    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [order, setOrder] = useState([]);
    const [toggleModal, setToggleModal] = useState(false)

    useEffect(() => {

        calculateCount()
        calculateTotal()

    }, [order])

    function addProduct(product) {

        console.log('Add product', product.name)

        // const updateOrder = order.map(prod => {

        //     if (prod.id === product.id) {
        //         prod.quantity++
        //     }

        //     return prod

        // })

        // setOrder(updateOrder)

        const productExists = order.find(prod => prod._id === product._id)

        if (productExists) {

            productExists.quantity++

            setOrder([...order])

        } else {

            product.quantity = 1;
            setOrder([...order, product])

        }

        Swal.fire({
            position: 'center',
            icon: 'success',
            padding: '.5rem',
            title: 'Producto Agregado',
            width: '300px'
        })

    }

    function calculateCount() {

        let cantidadItems = 0

        for (let item of order) {

            cantidadItems += item.quantity
        }

        setCount(cantidadItems)
    }

    function calculateTotal() {

        let total = 0

        order.forEach(item => {
            total += item.price * item.quantity
        })

        setTotal(total)
    }

    function removeProduct(_id) {

        // const indice = order.findIndex(prod => prod.id === id)

        // const orderCopy = [...order]

        // orderCopy.splice(indice, 1)

        // setOrder(orderCopy)

        const orderFiltered = order.filter(prod => prod._id !== _id)

        setOrder(orderFiltered)

        Swal.fire({
            position: 'top',
            width: '350px',
            height: '150px',
            title: 'Producto eliminado',
            text: 'Se elimino el producto de la orden actual',
            icon: 'success',
            timer: 2000
        })

    }

    function changeItemQuantity(product, value) {

        // const newOrder = order.map(prod =>{


        //     if(prod.id === id){
        //         prod.quantity = value
        //     }

        //     return prod
        // })

        // setOrder(newOrder)

        const producto = order.find(prod => prod._id === product._id);
        if (!producto) {
            product.quantity = value;
            return setOrder([...order, product])
        }

        producto.quantity = value

        setOrder([...order])

    }

    async function createOrder() {

        try {

            if(!user?._id){
                alert("Su sesion a caducado, debe registrarse nuevamente para crear una orden")
                return
            }

            const products = order.map(prod => {

                return {
                    product: prod._id,
                    quantity: prod.quantity,
                    price: prod.price
                }

            })

            // const user = user._id

            await axios.post(`${URL}/orders`, {
                products,
                user: user._id,
                total
            })

            const responseOrder = await axios.get(`${URL}/orders`)
            console.log("Listado de ordenes:", responseOrder.data.orders)

            Swal.fire({
                title: 'Orden Creada',
                text: 'La orden fue creada correctamente',
                icon: 'success',
                timer: 1500
            })

        } catch (error) {
            console.log(error)
            alert('Error al crear la orden')
        }

    }

    return (
        <OrderContext.Provider
            value={{
                order,
                addProduct,
                toggleModal,
                setToggleModal,
                count,
                total,
                removeProduct,
                changeItemQuantity,
                createOrder
            }}
        >
            {children}

        </OrderContext.Provider>
    )

}