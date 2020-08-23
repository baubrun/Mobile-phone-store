import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {setProductDetail, getProducts, productsState} from "../app/productsSlice"



const ProductDetail = () => {
    const dispatch = useDispatch()
    const {productDetail} = useSelector(productsState)
    const [item, setItem] = useState([])
  
    return (
        <Grid container>
            <Grid item>
                <Typography></Typography>
            </Grid>
        </Grid>
    )
}

export default ProductDetail
