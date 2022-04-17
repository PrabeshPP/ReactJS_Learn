import {Route,Routes,Navigate} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import DetailQuote from "./pages/DetailQuote";
import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
import MainNavigation from "./components/layout/MainNavigation";
import React from "react";

function App() {
  return (
   <React.Fragment>
   <MainNavigation/>
     <Routes>
   <Route path="/" element={<Navigate to="/quotes" />}/>
     <Route  path="/quotes" element={<AllQuotes/>} />
     <Route path="/quotes/:quoteId/*" element={<DetailQuote/>} >
      <Route path="comments" element={<Comments/>} />
     </Route>
     <Route path="/new-quote" element={<NewQuote/>} />
   </Routes>
   </React.Fragment>
  );
}

export default App;
