import {useEffect, useState} from "react";
import { urlData } from "../utils/Constants";

const useSingleCartData = (productId) => {
    const [cartProductDetail, setCartProductDetail] = useState(null);
    useEffect(()=>{
        featchProduct();
    }, []);
    const featchProduct = async () => {
        `${urlData.commonDummyData}/recipes`
        const data = await fetch(`${urlData.commonDummyData}/recipes/${productId}`);
        const json = await data.json();
        console.log(json);
        setCartProductDetail(json);
    };
    return cartProductDetail;
}

export default useSingleCartData;