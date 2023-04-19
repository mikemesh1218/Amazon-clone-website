
import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon  from '@mui/icons-material/Search'
import ShoppingBasket  from '@mui/icons-material/ShoppingBasket'
import { useStatevalue } from './StateProvider'



export default function Header(){
   const [{basket}] = useStatevalue()
   console.log(basket)
    
   return(
     <nav className='header__container'>
        <div>
           <Link to="/">
              <img src={require("./Components/Portfoilio img/amazon-logo-s3f.png")} alt='logo' className='header__logo'/>
           </Link> 
        </div>
        <div>
         <input className='header__input'/>
        </div>
        <div>
        <button className='header__button'><SearchIcon/></button>
        </div>
        <div className='goto__links'>
            <Link to='/Login' className='header__link links'>
               <span className='link__upper'><small>Hello,Michael </small></span>
               <div className='link__lower'><span><strong>Sign Out</strong></span></div>
            </Link>
            <Link className='header__link links'>
               <span className='link__upper'><small>Returns</small></span>
               <div className='link__lower'><span><strong>&Orders</strong></span></div>
            </Link>
            <Link className='header__link links'>
               <span className='link__upper'><small>Your</small></span>
               <div className='link__lower'><span><strong>Prime</strong></span></div>
            </Link>
            <Link to='/Checkout'className='header__link__basket links'>
               <span className='link__upper'><ShoppingBasket/></span>
               <span>{basket.length}</span>
            </Link>
        </div>
     </nav>
    )
}