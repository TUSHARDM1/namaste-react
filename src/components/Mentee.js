import useCartsDataList from "../utils/useCartsDataList";
import ShimmerCard from "./ShimmerCard";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const Mentee = () => {
    const products = useCartsDataList();
    if (products === null) return <ShimmerCard></ShimmerCard>;
    return(
        <div>
            <div className="flex flex-wrap justify-center mt-5">
                 {products?.map((product)=>
                 <Link key={product.id} to={`/cart-product-details/${product.id}`}>
                    <CartProduct resdata={product} />
                 </Link>
                 )} 
            </div>  
        </div>
    )
}

export default Mentee;

