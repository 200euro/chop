import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import OnSale from './components/OnSale/OnSale'
import SaleSection from './components/SaleSection/SaleSection'

const App = () => {
  return (
    <>
    <Header/>

<Routes>
<Route path='/' element={<OnSale/>}></Route>



</Routes>

<Home/>



    </>
  )
}

export default App