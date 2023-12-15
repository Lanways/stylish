import Home from './pages/Home'
import Product from './pages/Product'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App