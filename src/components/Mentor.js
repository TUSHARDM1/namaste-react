import { useState, useEffect } from "react";
import Product from "./Product";
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
    return(
        <div>
            <div className="card-holder">
                 {products.map((product)=>
                 <Link key={product.id} to={`/product-details/${product.id}`}>
                    <Product resdata={product} />
                 </Link>)} 
            </div>  
        </div>
    )

}

export default Mentor;