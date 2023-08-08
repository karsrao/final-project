import { useState, useEffect } from 'react'

import Product from '../Product.js';
import productData from "../productData.js"

import { Grid } from '@mui/material'

function Collection({ selectedCollection }){
    useEffect(() => {
        document.title = `Diego and Co. | Collection | ${selectedCollection}`
    }, [selectedCollection])

    const [items, setItems] = useState(productData)

    const filterItems = () => {
        const newItems = productData.filter((newVal) => {
            return newVal.category === selectedCollection
        })
        setItems(newItems)
    }
    useEffect(filterItems, [selectedCollection])
    
    return(
        <Grid container spacing={4} className="" justifyContent="flex-start" alignItems="center">
            <Product items={items} />
        </Grid>
    )
}

export default Collection