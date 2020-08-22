import React, { useState, useEffect } from "react";
import Product from "./Product";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import { data } from "../data";
import {useSelector, useDispatch} from "react-redux"
import {getProducts, productsState, updateProducts} from "../app/productsSlice"
import { addCartItem,  } from "../app/cartSlice";



const ProductList = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(productsState)
  const [items, setItems] = useState([])

  useEffect(() => {
    dispatch(getProducts(data))
    setItems(products)
  }, [])

  useEffect(() => {
    // dispatch(getProducts(data))
    setItems(products)
  }, [products])


  const addToCart = (id) => {
    const found = items.find(item => item.id === id)
    const copyFound = {...found}
    copyFound.inCart = true
    console.log('copyFound :>> ', copyFound);
    dispatch(addCartItem(copyFound))
    dispatch(updateProducts(copyFound))
  }


  return (
    <>
      <Title title="PHONES" />
      <Grid container direction="row" justify="center" alignItems="center">
        {items.map((p, idx) => {
          return <Product
          addToCart={addToCart} 
          item={p} 
          key={idx} 
          />;
        })}
      </Grid>
    </>
  );
};

export default ProductList;
