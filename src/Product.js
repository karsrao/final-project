// import { useState } from 'react'
import './Product.css'

import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const Product = ({ items }) => {
  // const [selectedProduct, setSelectedProduct] = useState("")
  return (
    <>
      {items.map((prod, index) => {
        return (
          <Grid item xs={12} md={4} key={index} className='product-thumbnail'>
            {/* <Link to={"/products/"+prod.category+"/"+prod.url} onClick={() => setSelectedProduct(prod)}> */}
            <Link to={'/products/' + prod.category + '/' + prod.url}>
              <img src={'/images/' + prod.category + '/' + prod.productImage} alt={prod.productName} className='product-image' />
              <div className="name-text">{prod.productName}</div>
            </Link>
            <div className='price-text'>{prod.productPrice}</div>
          </Grid>
        )
      })}
    </>
  )
}


export default Product