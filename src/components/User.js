import { useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return (
        <div className="user-card">
            <h2>Count = {count} </h2>
            <h2>Count2 = {count2} </h2>
            <button onClick={()=>{
                updateCount = count + 1;
                setCount(updateCount);
                updateCount2 = count2 + 1;
                setCount2(updateCount2);
            }}>
                Increase Count
            </button>
           <h3>Name: {name}</h3>
           <h4>Location: Pusad</h4>
           <h5>Contact: TUSHARDM</h5>
        </div>
    )
}

export default User;