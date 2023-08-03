import { useEffect } from "react"
import { Button, Container } from "@mui/material"
import { Grid } from "@mui/material"

import CollectionGrid from "./layout/CollectionGrid"

import './Home.css'

function Home(){
    useEffect(() => {
        document.title = "Diego and Co. | Boutique Dog Accessories"
    }, [])

    return(
        <Container maxWidth="xl" className="main-container">
            <div className="Home">
                <Grid container spacing={0} className="home-banner-first banner" alignItems="center" justifyContent="center">
                    <Grid item md={6}>
                        <div className="banner-text-wrap">                            
                            <p>At Diego and Co, we embrace the timeless bond between humans and their four-legged friends. Our artisans pour their heart and soul into every creation, resulting in one-of-a-kind pieces that exude charm, comfort, and undeniable flair.</p>
                            <Button href="/products">View our Collection</Button>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="banner-image-wrap">
                            <img src="/images/dog-ice-cream-cropped.jpg" alt="dog wearing a bandana eating ice cream" />
                        </div>                        
                    </Grid>
                </Grid>

                <Grid container spacing={0} className="home-banner-second banner">
                    <Grid item xs={12}>
                        <div className="banner-text-wrap">
                            <h1>Welcome to Diego and Co.</h1>
                            <p>Your ultimate destination for exquisite handmade dog accessories. Nestled in the heart of Melbourne, our boutique store is a haven for pet parents who share a passion for pampering their furry companions with uniquely crafted collars, leashes and bandanas.</p>
                        </div>
                    </Grid>
                </Grid>

                <div className="banner">
                    <CollectionGrid />
                </div>                

            </div>
        </Container>        
    )
}
export default Home