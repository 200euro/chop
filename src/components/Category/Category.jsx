import React from 'react'
import './Category.scss'
import SectionTitle from '../SectionTtitle/SectionTitle'
import Card from '../card/Card'
import Btn from '../btn/Btn'

const Category = () => {
  return (
    <>
       <section className="category">
   <div className="container">

      <SectionTitle position='center'>NEW ARRIVALS</SectionTitle>
      

      <div className="category__wrapper">
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='5' price='120 ' stars='⭐⭐⭐⭐⭐' />
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='3' price='120'   stars='⭐⭐⭐'/>
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4' price='120' stars='⭐⭐⭐⭐' />
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='5' price='120'   stars='⭐⭐⭐⭐⭐'/>
      </div>

      <Btn>View All</Btn>

<hr style={{margin: '60px 0'}} />

      <div className="category__wrapper">
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='5' price='120 ' stars='⭐⭐⭐⭐⭐' />
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='3' price='120'   stars='⭐⭐⭐'/>
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4' price='120' stars='⭐⭐⭐⭐' />
 <Card image={'/card1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='5' price='120'   stars='⭐⭐⭐⭐⭐'/>
      </div>

      <Btn>View All</Btn>


      


   </div>
</section>
    </>
  )
}

export default Category