import React from 'react'
import './Account.scss'

const Account = () => {
  return (
    <>
    <section className="account">
      <div className="container">
         <div className="wrap__acc">
            <div className="text__acc">
     <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>

            <div className="input__box">
               <input placeholder='Enter your email address' type="text" />
               <input placeholder='Subscribe to Newsletter' type="text" />
            </div>
         </div>
      </div>
    </section>
    
    
    </>
  )
}

export default Account