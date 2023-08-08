import { Link } from "react-router-dom"
import "./CollectionGrid.css"

import { Grid } from "@mui/material"

function CollectionGrid({ setSelectedCollection }){
    return(
        <Grid container spacing={4} className="" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={4}>
                <div className="collection-tile">
                    <Link to="/products/collars" onClick={() => setSelectedCollection("collars")}>Shop Collars</Link>
                </div>                    
            </Grid>
            <Grid item xs={12} md={4}>
                <div className="collection-tile">
                    <Link to="/products/leashes" onClick={() => setSelectedCollection("leashes")}>Shop Leashes</Link>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className="collection-tile">
                    <Link to="/products/bandanas" onClick={() => setSelectedCollection("bandanas")}>Shop Bandanas</Link>
                </div>
            </Grid>
        </Grid>
    )
}
export default CollectionGrid