import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import OnSale from './components/OnSale/OnSale'
import SaleSection from './components/SaleSection/SaleSection'
import { SinglePage } from './pages/SinglePage'
import Clothes from './components/Clothes/Clothes'
import Brands from './components/Brands/Brands'
import Custemors from './components/Customers/Custemors'
import Account from './components/Account/Account'
import Footer from './components/Footer/Footer'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import CatalogPage from './components/CatalogPage/CatalogPage'
import CatalogWrap from './components/CatalogWrap/CatalogWrap'

const App = () => {
  return (
    <>
    <Header/>

    <Clothes/>
    <Brands/>
   

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/sale' element={<OnSale/>}/>
<Route path='/product/:id' element={<SinglePage/>}/>
<Route path='/catalog' element= {<CatalogWrap/>}/>



<Route path='/signup' element ={<SignupPage/>}/>
<Route path='/login' element={<LoginPage/>}/>



</Routes>

{/* <SaleSection/>
<Custemors/>
<Account/> */}



<Footer/>

    </>
  )
}

export default App