import React from "react";
import {useParams,Outlet, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy_Data = [
    { id: "q1", author: "Prabesh", text: "Winner never quit!!" },
    { id: "q2", author: "Prabesh the great", text: "Learner are the great leader!!" },
  ];

const DetailQuote=()=>{

    const params=useParams();
    const quote=Dummy_Data.find((item)=>item.id===params.quoteId);
   
    return(
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
           
            
            <Outlet/>
        </React.Fragment>
    )

}

export default DetailQuote;