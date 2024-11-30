import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import OnSale from './components/OnSale/OnSale'
import SaleSection from './components/SaleSection/SaleSection'
import { SinglePage } from './pages/SinglePage'

const App = () => {
  return (
    <>
    <Header/>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/sale' element={<OnSale/>}/>


<Route path='/product/:id' element={<SinglePage/>}/>




</Routes>




    </>
  )
}

export default App