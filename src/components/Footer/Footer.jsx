import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   <footer className="footer">
      <div className="contianer">
         <div className="wrap__footer">
         <div className="box__logo">
            <h1>SHOP.CO</h1>
            <p>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
            <div>
               <img src="/twi1.png" alt="" />
               <img src="/facebo2.png" alt="" />
               <img src="/insta3.png" alt="" />
               <img src="/github-4.png" alt="" />
            </div>
         </div>

<div className="box__company">
   <h1>Company</h1>
   <p>About</p>
   <p>Features  </p>
   <p>Works </p>
   <p>Career </p>
</div>
<div className="box__help">
   <h1>Help</h1>
   <p>Customer Support</p>
   <p>Delivery Details</p>
   <p>Terms & Conditions</p>
   <p>Privacy Policy</p>
</div>
<div className="box__faq">
   <h1>FAQ</h1>
   <p>Account</p>
   <p>Manage Deliveries</p>
   <p>Orders</p>
   <p>Payments</p>
</div>
<div className="box__resources">
   <h1>Resources</h1>
   <p>Free eBooks</p>
   <p>Development Tutorial</p>
   <p>How to - Blog</p>
   <p>Youtube Playlist</p>
</div>



         </div>
        

<div className="foot__footer">
   <h4>Shop.co © 2000-2023, All Rights Reserved</h4>
   <div>



 <Link><img src="/visa-1.png" alt="" /></Link>  
 <Link><img src="/mastercard-2.png" alt="" /></Link>  
 <Link><img src="/paypal-3.png" alt="" /></Link>  
 <Link><img src="/apple-4.png" alt="" /></Link>  
 <Link><img src="/google-5.png" alt="" /></Link>  


   </div>
</div>

      </div>
   </footer>
   
   </>
  )
}

export default Footer