import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Shoping from './Pages/Shoping'
import Carddetailp from './Pages/Carddetailp'
import Checkoutpage from './Pages/Checkoutpage'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/shoping' element={<Shoping></Shoping>}></Route>
      <Route path='/card' element={<Carddetailp></Carddetailp>}></Route>
      <Route path='/check' element={<Checkoutpage></Checkoutpage>}></Route>
    </Routes>
    
      </div>
    
    </>
  )
}

export default App
