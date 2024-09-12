import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { OrderProvider } from './context/OrderContext.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>

    <BrowserRouter>

      <OrderProvider>
        <App />
      </OrderProvider>

    </BrowserRouter>
    
  </StrictMode>,
)
