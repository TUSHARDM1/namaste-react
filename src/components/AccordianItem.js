import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const AccordianItem = (props) => {
    const {data, showAccordian, setShowIndex} = props;
    const dispatch = useDispatch();
    handleClickEvent = () => {
        setShowIndex();
    }
    handleAddItem = (data) => {
        // Dispatch an Action
        dispatch(addItem(data));
    }
    return(
        <div>
            <div className="w-full p-2 m-2 bg-gray-300 cursor-pointer"
            onClick={handleClickEvent}>
                {data}
            </div>
           {showAccordian ? 
           <div>
            <div className="flex">
            <div>
                <img className=" max-h-[300px] m-3"  src={props?.image} />
            </div>
            <div >
                <button className="p-2 m-4 bg-green-300 rounded"
                onClick={() => handleAddItem(data)}>
                    Add +
                </button>
                <p className="m-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
           </div>
            </div>
             : 
           
            <div>
                
            </div>} 
        </div>
        
        
    )
}

export default AccordianItem;