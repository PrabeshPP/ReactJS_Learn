import React from "react";
import { Routes, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const DetailQuote=()=>{
    const params=useParams();
    return(
        <React.Fragment>
            <h1>Detail Quote page</h1>
            <p>{params.quoteId}</p>
            <Routes>
            <Route path={`/quote/${params.quoteId}/comments`} element={<Comments/>}/>
            </Routes>

        </React.Fragment>
    )

}

export default DetailQuote;