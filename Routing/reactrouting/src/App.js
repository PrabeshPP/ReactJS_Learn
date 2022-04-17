import {Route,Routes,Navigate} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import DetailQuote from "./pages/DetailQuote";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
   <Routes>
   <Route path="/" element={<Navigate to="/quotes" />}/>
     <Route  path="/quotes" element={<AllQuotes/>} />
     <Route path="/quotes/:quoteId" element={<DetailQuote/>} />
     <Route path="/new-quote" element={<NewQuote/>} />
   </Routes>
  );
}

export default App;
