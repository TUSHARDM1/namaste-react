import CardHolder from "./CardHolder";
import CardHolderV2 from "./CardHolder2";
import { useEffect, useState } from "react";
import dummyData from "../data/dummydata";
import Product from "./Product";
import ShimmerCard from "./ShimmerCard"
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
    const onlineStatus = useOnlineStatus();
    let [userData, setUserData] = useState(['Hello Tushar']);
    let [dummydata, setDummyData] = useState(dummyData);
    let [filteredDummyData, setFilteredDummyData] = useState(dummyData);
    let [products, setProducts]= useState([]);
    let [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=> {
        fetchDataFromServer();
        console.log("Called only once as Dependancy Array is empty")
    }, []);

    useEffect(() => {
        console.log("Called on every change as Dependancy Array is missing")
    })

    useEffect(() => {
        console.log("Called only when userData changes");
    }, [userData])

    console.log("Body Rendered");

    fetchDataFromServer = async () => {
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
        setProducts(json?.products);
        setFilteredProducts(json?.products);
    }
     if (!onlineStatus) {
        return <h1>
            Looks like you are offline. Please check your internet connectin.
        </h1>
    }
    if (products.length === 0) {
        return <ShimmerCard />
    }
    return (
        
        <div className="body">
            <div className="flex">
            <div className="search-holder">
                <input type="text" className="search-box"
                value={searchText}
                onChange={(e)=> {
                    setSearchText(e.target.value);
                }}
                ></input>
                <button onClick={() => {
                    let filteredDummydata = dummydata.filter((Person)=> {
                      return Person.employee_name.toLowerCase().includes(searchText.toLowerCase())
                    });
                    filteredDummydata.length ? setFilteredDummyData(filteredDummydata) : null;
                }}>
                    Search Teacher
                </button>
                <button onClick={() => {
                    let filteredProducts = products.filter((product)=> {
                      return product.brand.toLowerCase().includes(searchText.toLowerCase())
                    });
                    filteredProducts.length ? setFilteredProducts(filteredProducts) : null;
                }}>
                    Search Product
                </button>
                <button onClick={() => {
                    setFilteredDummyData(dummyData);
                    setFilteredProducts(products);
                    setSearchText("");
                }}>
                    Reset
                </button>
            </div>
            <p>{userData}</p>
            </div>
            
            
            <div className="filter-button">
                <button className="btn" onClick={()=> {
                  let dummydataFiltered = filteredDummyData.filter((person) => person.employee_age > 62);
                   setFilteredDummyData(dummydataFiltered);
                }}> 
                    Top Rated Employees
                </button>
                <button className="btn" onClick={() => {
                   userData !== 'Hello Dipali' ? setUserData('Hello Dipali') : setUserData('Hello Tushar')
                }}>
                    Change Tushar to Dipali and Vice versa
                </button>
                <button className="btn"  onClick={()=> {
                  let dummydataFiltered = [];
                  setFilteredDummyData(dummydataFiltered);
                }}>
                    Remove Teacher Data
                </button>
            </div>
            <div className="card-holder">
                <CardHolder name="Tushar Maheshwari" skills="Angular, Typescript, React"></CardHolder>
                {filteredDummyData.map((person)=><CardHolderV2 key={person.id} resdata={person} />)}
               {filteredProducts.map((product)=><Product key={product.id} resdata={product} />)}         
            </div>
        </div>
    )
}

export default Body;