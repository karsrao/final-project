import { Container } from "@mui/material"
import PageIntro from "./layout/PageIntro"
function Products(){
    return(
        <Container maxWidth="xl" className="main-container">
            <div className="Products">
                <PageIntro 
                    title={'Our Collection'} 
                    description={'Indulge in a curated collection of handcrafted dog accessories that blend premium materials with a touch of Australian artistry. From exquisite leather collars that redefine elegance to cozy knit sweaters that keep your furry friend warm in style, each piece is a testament to our dedication to quality and craftsmanship. Whether your canine companion is a regal retriever, a dapper dachshund, or a playful poodle, our range accommodates all sizes and breeds.'} 
                />
            </div>
        </Container>
    )
}
export default Products