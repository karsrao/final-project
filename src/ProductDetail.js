import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import productData from "./productData"

import "./ProductDetail.css"

import { Container, Grid } from "@mui/material"
import { Button } from "@mui/material"

function ProductDetail(){
    const [product, setProduct] = useState("")

    const params = useParams()
    const paramUrl = params.product
    const getProductDetails = () => {
        const currentProduct = productData.find(prod => prod.url === paramUrl)
        setProduct(currentProduct)
    }
    useEffect(getProductDetails, [paramUrl])

    return(
        <>
        <Container>
            <Grid container spacing={4} justifyContent="flex-start" alignItems="flex-start" className='product-details pt-30'>
                <Grid item xs={12} md={4}>
                    <img src={'/images/' + product.category + '/' + product.productImage} alt={product.productName} className='product-image' />            
                </Grid>
                <Grid item xs={12} md={8} className="">
                    <h1>{product.productName}</h1>
                    <p className="product-description">{product.productDescription}</p>
                    <p className="product-price">{product.productPrice}</p>
                    <p><small>{product.sku}</small></p>
                    <p><small>{product.category}</small></p>
                    <Button>Add to Cart</Button>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default ProductDetail