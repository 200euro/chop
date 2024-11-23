import React from 'react'
import './Card.scss'

const Card = ({image, name, stars, rate, price}) => {
  return (
   <>
   <div className="card">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <div className="card__rating">
         <img src="" alt="" />
         {stars}
         <p>{rate/5}</p>

         <b>${price}</b>
      </div>
   </div>
   
   
   </>
  )
}

export default Card