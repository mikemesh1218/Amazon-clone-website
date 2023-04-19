import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStatevalue } from './StateProvider'
import { getBasketTotal } from './reducer'

export default function Subtotal(){
  const [{basket},dispatch] = useStatevalue()
    return(
        <div className='subtotal'>
            {/* { total price} */}
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal({basket.length} items):<strong> {value}</strong></p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
            />
            <div><input type="checkbox" className='checkbox'/><span>This order contains gift</span></div>
            <button>Proceed to checkout</button>
        </div>
    )
}