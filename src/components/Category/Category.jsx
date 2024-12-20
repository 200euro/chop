import React from 'react'
import './Category.scss'
import SectionTitle from '../SectionTtitle/SectionTitle'
import Card from '../card/Card'
import Btn from '../btn/Btn'


import Products from '/public/products.json'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <>
       <section className="category" >
   <div className="container">
<div id='selling'>
    <SectionTitle  position='center'>NEW ARRIVALS</SectionTitle>
</div>
      

      <div className="category__wrapper" >

       {Products.slice(0, 4).map((card, i)=> (
        <Link to={`/product/${card.id}`} key={i} className='category__card'>
        <Card image={card.image} name={card.name} rate='5' price={card.price} stars='⭐⭐⭐⭐⭐' />
        
        </Link>
       ))}


      </div>

      <Btn>View All</Btn>

<hr style={{margin: '60px 0'}} /> 

<div id='selling'>
<SectionTitle  position='center'> Top Selling</SectionTitle>

</div>



      <div className="category__wrapper" >
 
      {Products.slice(4, 8).map((card, i)=> (
        <Link to={`/product/${card.id}`} key={i} className='category__card'>
        <Card image={card.image} name={card.name} rate='5' price={card.price} stars='⭐⭐⭐⭐⭐' />
        
        </Link>
       ))}
      </div>

      <Btn>View All</Btn>


      


   </div>
</section>
    </>
  )
}

export default Category