import { useOrder } from '../../context/OrderContext'
import OrderItem from '../order-item/OrderItem'
import './OrderDialog.css'

export default function OrderDialog() {

  const { order, toggleModal, setToggleModal, total } = useOrder()

  if (!toggleModal) return


  return (
    <div className='modal-overlay' onClick={() => setToggleModal(!toggleModal)}>

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">Orden Actual</div>

        <table className="modal-table">

          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Subtotal</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          
          <tbody>

            {
              order.map(item => {
                return <OrderItem key={item.id} item={item} />
              })
            }

          </tbody>



        </table>

        <div className='list-total'>Total: S/. {total}</div>

        {/* <div className="modal-body">

          <ul className="order-list">

            {
              order.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))
            }

          </ul>

        </div> */}

        <div className="modal-footer">
          <button onClick={() => setToggleModal(!toggleModal)}>Cerrar</button>
          <button className='btn-modal'>
            Finalizar compra
          </button>
        </div>

      </div>
      
    </div>

  )
}
