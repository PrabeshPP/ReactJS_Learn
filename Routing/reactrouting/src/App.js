import {Route,Routes,Navigate} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import DetailQuote from "./pages/DetailQuote";
import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
import React from "react";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <Layout>
   
     <Routes>
   <Route path="/" element={<Navigate to="/quotes" />}/>
  
     <Route  path="/quote" element={<AllQuotes/>} />
     <Route path="/quote/:quoteId/*" element={<DetailQuote/>} />
      
    
     <Route path="/new-quote" element={<NewQuote/>} />
     <Route path="*" element={<NotFound/>}/>
   </Routes>
   </Layout>
  );
}

export default App;
