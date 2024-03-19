import { Link, useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import useProduct from "../utils/useProduct";
 
const ProductDetails = (props) => {
    const {userId} = useParams();
    const productDetail = useProduct(userId);
    if (productDetail === null) return <ShimmerCard></ShimmerCard>;
    const {title, brand, thumbnail, images, description, price, stock} = productDetail;
    return (
        <div className="product-details">
            <Link className="link right" to={"/mentor"}>Back</Link>
           <h1>
           {title} -
           <small>
            {brand}
           </small>
            </h1> 
            <img src={thumbnail} className="banner" /> <br />
            <p>Available in $ {price}</p>
            <p>Available in Stock {stock}</p>
            <p>{description}</p>
            <ul>
            {images.map((imagePathUrl) => 
                <li>
                  <img src={imagePathUrl} className="list-images"/>
                </li>
            )}
            </ul>
        </div>
    )
}
export default ProductDetails;