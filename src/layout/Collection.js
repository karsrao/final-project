import { useState, useEffect } from 'react'

import Product from '../Product.js';
import productData from "../productData.js"

import { Grid } from '@mui/material'

function Collection({ selectedCollection }){
    const [items, setItems] = useState(productData)
    console.log(selectedCollection)
    const filterItems = () => {
        const newItems = productData.filter((newVal) => {
            return newVal.category === selectedCollection
        })
        setItems(newItems)
    }

    useEffect(filterItems, [selectedCollection])
    console.log(items)
    
    return(
        <>
            <Grid container spacing={4} className="" justifyContent="flex-start" alignItems="center">
                <Product items={items} />
            </Grid>
        </>
    )
}

export default Collection