import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';

import { Container } from "@mui/material"

import PageIntro from "./layout/PageIntro"
import CollectionGrid from "./layout/CollectionGrid"
import Collection from "./layout/Collection"
import productData from "./productData";

import "./Products.css"

function Products(){
    useEffect(() => {
        document.title = `Diego and Co. | Our Collection`
    }, [])

    const [selectedCollection, setSelectedCollection] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    const paramCat = params.category
    const foundCat = productData.some(el => el.category === paramCat);

    const getCurrentCat = () => {
        if(paramCat){
            if(foundCat){
                setSelectedCollection(paramCat)
            } else {
                navigate(`/whoops`)
            }
        }
    }
    useEffect(getCurrentCat, [paramCat, foundCat, navigate])
    
    return(
        <Container maxWidth="xl" className="main-container">
            <div className="Products">
                <PageIntro 
                    title={'Our Collection'} 
                    description={'Indulge in a curated collection of handcrafted dog accessories that blend premium materials with a touch of Australian artistry. From exquisite leather collars that redefine elegance to cozy knit sweaters that keep your furry friend warm in style, each piece is a testament to our dedication to quality and craftsmanship. Whether your canine companion is a regal retriever, a dapper dachshund, or a playful pomeranian, our range accommodates all sizes and breeds.'} 
                />
            </div>
            <div className="productList pt-30">
                {foundCat ? 
                    <>
                        <h2 className="collection-title">{selectedCollection}</h2>
                        <Collection selectedCollection={selectedCollection} />  
                    </>                    
                    : <CollectionGrid setSelectedCollection={setSelectedCollection} />}
            </div>
        </Container>
    )
}
export default Products