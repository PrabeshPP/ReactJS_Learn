import React from "react";
import {useParams,Outlet, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy_Data = [
    { id: "q11", author: "Prabesh", text: "Winner never quit!!" },
    { id: "q2", author: "Prabesh the great", text: "Learner are the great leader!!" },
  ];

const DetailQuote=()=>{

    const params=useParams();
    const quote=Dummy_Data.find((item)=>item.id===params.quoteId);
        if(!quote){
            return <p>No QuoteFound!!</p>
        }
    return(
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
           
            
            <Outlet/>
        </React.Fragment>
    )

}

export default DetailQuote;