import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";


const sortQuote=(quotes,ascending)=>{
  return quotes.sort((quoteA,quoteB)=>{
    if(ascending){
      return quoteA.id>quoteB.id?1:-1;
    }else{
      return quoteA.id<quoteB.id?1:-1;
    }
  });

};

const QuoteList = (props) => {
  const navigate = useNavigate();
  //use location has the value which the query parameters needed'
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedQuotes=sortQuote(props.quotes,isSortingAscending);
  const changeSortingHandler = () => {
    navigate("/quotes?sort="+(isSortingAscending?"des":"asc"));
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
