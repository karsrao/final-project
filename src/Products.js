import { useState } from "react"

import { Container } from "@mui/material"

import PageIntro from "./layout/PageIntro"
import CollectionGrid from "./layout/CollectionGrid"
import Collection from "./layout/Collection"

import "./Products.css"

function Products(){
    const [selectedCollection, setSelectedCollection] = useState(null)
    console.log(selectedCollection + "from products js")
    return(
        <Container maxWidth="xl" className="main-container">
            <div className="Products">
                <PageIntro 
                    title={'Our Collection'} 
                    description={'Indulge in a curated collection of handcrafted dog accessories that blend premium materials with a touch of Australian artistry. From exquisite leather collars that redefine elegance to cozy knit sweaters that keep your furry friend warm in style, each piece is a testament to our dedication to quality and craftsmanship. Whether your canine companion is a regal retriever, a dapper dachshund, or a playful poodle, our range accommodates all sizes and breeds.'} 
                />
            </div>
            <div className="productList pt-30">
                {selectedCollection ? 
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