import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '/public/products.json'
import ProductHero from '../components/ProductHero/ProductHero'
import Tabs from '../components/TabsWrap/TabsWrap'
import TabsWrap from '../components/TabsWrap/TabsWrap'


export const SinglePage = () => {

const {id} = useParams()

const product = Products.find(item => item.id === Number (id))
 
  return (
<>

<ProductHero product={product}/>

<TabsWrap/>

</>
  )
}
