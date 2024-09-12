import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';


const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

export function OrderProvider({children}) {

    const [order, setOrder] = useState(['XBOX', 'Steam']);

    function addProduct(product){

        console.log('Add product', product.name)

        setOrder([...order, 'nuevo'])

    }

    return (
        <OrderContext.Provider
            value={{
                order,
                addProduct
            }}
        >
            {children}

        </OrderContext.Provider>
    )

}