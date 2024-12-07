import React from 'react'
import './RewiewCard.scss'
const RewiewCard = ({card}) => {
  return (
   <>
   
   <div className="rewiew-card">
<div>
   <p>⭐⭐⭐⭐⭐</p>
   <img src="/tritocki.png" alt="" />
</div>

<h3> {card.user} ✅</h3>
<q>{card.text}</q>
<b>{card.date}</b>
            </div>
   
   
   </>
  )
}

export default RewiewCard