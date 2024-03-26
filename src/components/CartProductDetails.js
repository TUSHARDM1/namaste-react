import { Link, useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import useSingleCartData from "../utils/useSingleCartData";
import AccordianItem from "./AccordianItem";
import { useState } from "react";
 
const CartProductDetails = (props) => {
    const { productId } = useParams();
    const productDetail = useSingleCartData(productId);
    const [showIndex, setShowIndex] = useState(0);
    if (productDetail === null) return <ShimmerCard></ShimmerCard>;
    const {name, id, image, cuisine, ingredients} = productDetail;
    console.log(productDetail);
    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h1 className="text-lg m-4 font-bold"> {name}
            </h1> 
            <Link className="m-4 px-3 py-2  bg-green-200 rounded" to={"/mentee"}>Back</Link>
            </div>
            <div className="flex">
            <div className="max-w-[100px] min-w-[100px] mr-3">
                <img src={image} className="max-h-[300px] mx-auto" /> <br />
            </div>
            <div className="ml-2">
                <p>Available in {cuisine}</p>
                <p>Ingredients {ingredients.join(", ")}</p>
                <ul className="">
                {ingredients.map((item, index) =>  
                    <li >
                        <AccordianItem 
                            showAccordian={index === showIndex ? true : false} 
                            setShowIndex={()=>{setShowIndex(index)}} 
                            data={item} 
                            key={item}
                            image={image}>
                        </AccordianItem>
                    </li>
                )}
                </ul>
            </div>
            </div>
            
            
           
        </div>
    )
}
export default CartProductDetails;