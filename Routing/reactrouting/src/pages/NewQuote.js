import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";


const NewQuote=()=>{
    const navigate=useNavigate();
    const onAddQuote=(data)=>{
        console.log(data);
        navigate("/quotes");
        

    }
    return(
        <QuoteForm onAddQuote={onAddQuote}/>
    )

}

export default NewQuote;