import { Link, useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import useProduct from "../utils/useProduct";
 
const ProductDetails = (props) => {
    const {userId} = useParams();
    const productDetail = useProduct(userId);
    if (productDetail === null) return <ShimmerCard></ShimmerCard>;
    const {title, brand, thumbnail, images, description, price, stock} = productDetail;
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-lg m-4 font-bold"> {title} -
                <small>
                    {brand}
                </small>
            </h1> 
            <Link className="m-4 px-3 py-2  bg-green-200 rounded" to={"/mentor"}>Back</Link>
            </div>
            
           
            <img src={thumbnail} className="max-h-[300px] w-full" /> <br />
            <p>Available in $ {price}</p>
            <p>Available in Stock {stock}</p>
            <p>{description}</p>
            <ul className="flex flex-wrap">
            {images.map((imagePathUrl) => 
                <li className="p-2 m-2 hover:bg-gray-200 cursor-pointer transition-all">
                  <img src={imagePathUrl} className="border border-solid max-w-[200px]"/>
                </li>
            )}
            </ul>
        </div>
    )
}
export default ProductDetails;