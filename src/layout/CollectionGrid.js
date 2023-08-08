import { Link } from "react-router-dom"
import "./CollectionGrid.css"

import productData from "../productData.js"

import { Grid } from "@mui/material"

function CollectionGrid({ setSelectedCollection }){
    const catItems = [...new Set(productData.map((val) => val.category))];

    return(
        <Grid container spacing={4} className="" justifyContent="center" alignItems="center">
            {catItems.map((cat) => {
                return(
                    <Grid item xs={12} md={4}>
                        <div className="collection-tile">
                            <Link to={"/products/"+cat} onClick={() => setSelectedCollection(cat)}>Shop {cat}</Link>
                        </div>                    
                    </Grid>
                )                    
            })}
        </Grid>
    )
}
export default CollectionGrid