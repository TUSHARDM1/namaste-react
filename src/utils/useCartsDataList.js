import {useEffect, useState} from "react";
import { urlData } from "./Constants";

const useCartsDataList = () => {
    const [cartsDetailList, setCartsDetailList] = useState(null);
    useEffect(()=>{
        featchCarts();
    }, []);
    const featchCarts = async () => {
        const data = await fetch(`${urlData.commonDummyData}/recipes`);
        const json = await data.json();
        console.log(json.recipes);
        setCartsDetailList(json.recipes);
    };
    return cartsDetailList;
}

export default useCartsDataList;