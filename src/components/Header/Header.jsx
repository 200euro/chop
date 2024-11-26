import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<>

<header>
   <div className="container">
   <div className="header__wrap">
    <nav className="shop">
      <Link to={'/'}>
      <h1>SHOP.CO</h1></Link>
    </nav>

<Link to={'/sale'} className='dropdown' >

Shop

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/2560px-Arrow-down.svg.png" alt="" />
    <div>
      <Link to={'/'}>Man</Link>
      <Link to={'/'}>Woman</Link>
      <Link to={'/'}>Kids</Link>
    </div>
</Link>

<div className="silki">



<a href="/#arrivials">On Sale</a>
<a href="/#selling">New Arrivals</a>
 <Link to={''}>Brands</Link>
 <Link to={''}>Link</Link>
   <input className='main__input' type placeholder="Search for products..." />


</div>


   <img src="" alt="" />
   <img src="" alt="" />
</div>
   </div>





</header>

</>

  )
}

export default Header