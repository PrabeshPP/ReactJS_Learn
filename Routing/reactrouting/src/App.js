import {Route,Routes} from "react-router-dom";

function App() {
  return (
   <Routes>
     <Route  path="/quotes"/>
     <Route path="/quotes/:quoteId"/>
     <Route path="/new-quote"/>
   </Routes>
  );
}

export default App;
