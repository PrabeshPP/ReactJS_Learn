import { Link } from "react-router-dom";

const LoadComments=(props)=>{
    return(
        <div className="centered">
                 <Link className="btn--flat" to={`/quotes/${props.quoteId}/comments`}>Load Comments</Link>
                </div>
    )
}

export default LoadComments;