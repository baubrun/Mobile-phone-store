import React, {useState} from 'react'
import Product from "./Product"
import Title from "./Title"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";




const ProductList = () => {
    const [products, setProducts] = useState()
    
    return (
        <div>
            <Title title="PHONES" />
            <h3>ProductList</h3>
            <Product />
        </div>
    )
}

export default ProductList
