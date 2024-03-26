import { useState, useEffect } from "react";
import Product, { withHighRating } from "./Product";
import { urlData } from "../utils/Constants";
import { Link } from "react-router-dom";

const Mentor = () => {
    let [products, setProducts]= useState([]);
    useEffect(()=> {
        fetchDataFromServer();
        console.log("Called only once as Dependancy Array is empty")
    }, []);
    fetchDataFromServer = async () => {
        const data = await fetch(`${urlData.commonDummyData}/products`);
        const json = await data.json();
        setProducts(json?.products);
    }
    // Higher order component in React
    const ProductWithHighRating = withHighRating(Product);
    return(
        <div>
            <div className="flex flex-wrap justify-center mt-5">
                 {products.map((product)=>
                product.rating > 4.5 ? 
                 <Link key={product.id} to={`/product-details/${product.id}`}>
                    <Product resdata={product} />
                 </Link> :
                <Link key={product.id} to={`/product-details/${product.id}`}>
                    <ProductWithHighRating resdata={product} />
                 </Link>
                 )} 
            </div>  
        </div>
    )

}

export default Mentor;