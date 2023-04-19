import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import './Checkout.css'
import { useStatevalue } from './StateProvider';

export default function CheckoutProduct({id, title, rating, price, image}){
    
    const [{basket},dispatch] = useStatevalue()
    
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
        
    }
    
    return(
        <div className='checkoutProduct'>
            <img src={image} alt='' className='checkoutProduct_image'/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'><small>$</small><strong>{price}</strong></p>
                <div className='checkoutProduct_rating'>
                {
                Array(rating)
                .fill()
                .map(()=>{return(
                    <p><StarRateIcon/></p>
                )})
                }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>

            </div>
        </div>
    )
}