import React from 'react'
import './Product.css'

import { Grid } from '@mui/material'

const Product = ({ items }) => {            
  return (
    <>
      {items.map((prod) => {
        return (
          <Grid item xs={12} md={4} key={prod.index} className='product-thumbnail'>          
            <img src={'/images/' + prod.category + '/' + prod.productImage} alt={prod.productName} className='product-image' />
            <div className="name-text">{prod.productName}</div>
            <div className='price-text'>{prod.productPrice}</div>
          </Grid>
        )
      })}
    </>
  );
};


export default Product