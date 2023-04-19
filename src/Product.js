import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStatevalue } from './StateProvider';

export default function Product({id,title,price,rating,image}){
   const [{basket}, dispatch] = useStatevalue()
   
   const addToBasket = () => {
    //   Add to basket
    dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            price:price,
            rating:rating,
            image:image,
        }
    })
   }
   
   
    return(
        <div className='product_container'>
            <span className='product_title'><strong>{title}</strong></span>
            <span className='product_price'>$ <strong>{price}</strong></span>
            <span className='product_rating'>
                {
                Array(rating)
                .fill()
                .map(()=>{return(
                    <p><StarRateIcon/></p>
                )})
                }
            </span>
            <div className='image-container'>
              <img src={image} className="product_image"/>
              <button className='product_btn' onClick={addToBasket}>Add To Chart</button>
            </div>
            
        </div>
    )
}