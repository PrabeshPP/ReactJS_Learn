import {Route,Routes,Navigate} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import DetailQuote from "./pages/DetailQuote";
import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";

function App() {
  return (
   <Routes>
   <Route path="/:any" element={<Navigate to="/quotes" />}/>
     <Route  path="/quotes" element={<AllQuotes/>} />
     <Route path="/quotes/:quoteId/*" element={<DetailQuote/>} >
      <Route path="comments" element={<Comments/>} />
     </Route>
     <Route path="/new-quote" element={<NewQuote/>} />
   </Routes>
  );
}

export default App;
