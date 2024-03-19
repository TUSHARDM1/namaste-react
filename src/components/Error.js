import React from 'react';
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h3>Unexpected Application Error! </h3>
            <h2>Opps!</h2>
            <p>💿 Hey developer 👋</p>
            <p>Default Error Page.</p>
            <p>{err.statusText}: {err.status}</p>
        </div>
    )
}
export default Error;