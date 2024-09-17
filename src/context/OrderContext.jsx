import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import Swal from 'sweetalert2';


const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }) {

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

        const productExists = order.find(prod => prod.id === product.id)

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

    function removeProduct(id) {

        // const indice = order.findIndex(prod => prod.id === id)

        // const orderCopy = [...order]

        // orderCopy.splice(indice, 1)

        // setOrder(orderCopy)

        const orderFiltered = order.filter(prod => prod.id !== id)

        setOrder(orderFiltered)
    }

    function changeItemQuantity(id, value) {

        // const newOrder = order.map(prod =>{


        //     if(prod.id === id){
        //         prod.quantity = value
        //     }

        //     return prod
        // })

        // setOrder(newOrder)

        const producto = order.find(prod => prod.id === id)

        producto.quantity = value

        setOrder([...order])

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
                changeItemQuantity
            }}
        >
            {children}

        </OrderContext.Provider>
    )

}