import { useParams } from "react-router-dom";

// import productData from "./productData";

function ProductDetail(){
    const params = useParams()
    const paramUrl = params.product
    // const foundUrl = productData.some(el => el.url === paramUrl)

    console.log(paramUrl)

    return(
        <>
            <p>This is a product detail page</p>
        </>
    )
}
export default ProductDetail