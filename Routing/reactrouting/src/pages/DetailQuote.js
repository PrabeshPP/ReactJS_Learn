import React from "react";
import {useParams,Outlet, Link } from "react-router-dom";


const DetailQuote=()=>{
    const params=useParams();
    return(
        <React.Fragment>
            <h1>Detail Quote page</h1>
            <p><Link to={`/quotes/${params.quoteId}/comments`} >{params.quoteId}</Link></p>
           
            
            <Outlet/>
        </React.Fragment>
    )

}

export default DetailQuote;