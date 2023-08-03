import './PageIntro.css'

import { Grid } from '@mui/material'

function PageIntro( {title, description} ){
    return(
        <Grid container spacing={0} className="page-intro">
            <Grid item xs={12}>
                <div className="banner-text-wrap">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default PageIntro