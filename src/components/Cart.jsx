import React, {useState} from 'react'
import {useSelector} from "react-redux"



const Cart = () => {
    const cart = useSelector()
    return (
        <div>
            Cart
        </div>
    )
}

export default Cart
