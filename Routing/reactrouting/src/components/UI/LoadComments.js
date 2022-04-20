import { Link } from "react-router-dom";

const LoadComments=(props)=>{
    return(
        <div className="centered">
                 <Link className="btn--flat" to="comments">Load Comments</Link>
                </div>
    )
}

export default LoadComments;