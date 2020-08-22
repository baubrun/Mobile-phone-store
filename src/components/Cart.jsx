import React, {useState} from 'react'
import {useSelector} from "react-redux"
import {cartState} from "../app/cartSlice"


const Cart = () => {
    const cart = useSelector(cartState)


    return (
        <div>
            {cart.total}
        </div>
    )
}

export default Cart
