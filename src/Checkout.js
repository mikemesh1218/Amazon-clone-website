import React from 'react'
import { useStatevalue } from './StateProvider'
import './CheckoutProduct'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
  const [{basket}] = useStatevalue()
  const image = "https://static.vecteezy.com/system/resources/thumbnails/002/294/859/small/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg"
  
  return (
    <div className='checkout'>
      <div className='checkout_left'>
       <img  src={image} className='checkout__ad'/>
       {basket?.length === 0 ?(<div><h2>Your Shopping basket is empty</h2></div>):(<div>
       <h2 className='checkout_title'>Your shopping basket</h2>
        {basket.map(item => (
          <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}/>
        ))}
       </div>)}
      </div>
      {basket.length > 0 &&    
      <div className='checkout_right'>
        <Subtotal/>
      </div>}
    </div>
  )
}

export default Checkout