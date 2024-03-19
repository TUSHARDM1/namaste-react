import {useEffect, useState} from "react";
import { urlData } from "../utils/Constants";

const useProduct = (userId) => {
    const [productDetail, setProductDetail] = useState(null);
    useEffect(()=>{
        featchProduct();
    }, []);
    const featchProduct = async () => {
        const data = await fetch(`${urlData.commonDummyData}/products/${userId}`);
        const json = await data.json();
        console.log(json);
        setProductDetail(json);
    };
    return productDetail;
}

export default useProduct;