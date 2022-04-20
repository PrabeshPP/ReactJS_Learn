import React from "react";
import {useParams,Routes,Route} from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadComments from "../components/UI/LoadComments";
import Comments from "../components/comments/Comments";

const Dummy_Data = [
    { id: "q1", author: "Prabesh", text: "Winner never quit!!" },
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
            <Routes>
                <Route path="" element={<LoadComments quoteId={params.quoteId}/>}/>
                <Route path="comments" element={<Comments/>} />
               
            </Routes>
            
         
           
        </React.Fragment>
    )

}

export default DetailQuote;