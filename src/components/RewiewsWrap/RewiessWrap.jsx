import React from 'react'
import './Rewiess.scss'
import RewiewCard from '../RewiewCard/RewiewCard'

import RewiewData from './rewiws.json'

const RewiessWrap = () => {
  return (
   <>
   <section className="rewieswrpap">
      <div className="container">
         <div className="rewiews__wrapper">
            {RewiewData.map(card => (
               <>
               <RewiewCard key={card.id}  card={card}/>
               </>
            ))}



         </div>
      </div>
   </section>
   </>
  )
}

export default RewiessWrap