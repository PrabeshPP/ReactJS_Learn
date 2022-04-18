import QuoteForm from "../components/quotes/QuoteForm";


const NewQuote=()=>{
    const onAddQuote=(data)=>{
        console.log(data);
    }
    return(
        <QuoteForm onAddQuote={onAddQuote}/>
    )

}

export default NewQuote;