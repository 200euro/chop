import React from 'react'
import './Clothe.scss'

const Clothes = () => {
  return (
    <>
    <section className="clothes">
      <div className="container">
         <div className="clothes__wrapper">
            <div className="clothes__text">
       <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
       <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
       <button className="btnmain">Shop Now</button>

<div className="clothes__number">
   <div className="number__box">
   <h2>200+</h2>
   <p>International Brands</p>
   <div></div>
   </div>

   <div className="number__box">
   <h2>2,000+</h2>
   <p>High-Quality Products</p>



   <div></div>

   </div>

   <div className="number__box">
   <h2>30,000+</h2>
   <p>Happy Customers</p>
<div></div>
   

   
   </div>
   
</div>

            </div>


<div className="clothes__image">
   <img src="/manwoman.png" alt="" />
</div>


         </div>
      </div>
    </section>
    
    </>
  )
}

export default Clothes