

import {Route,Routes,Navigate} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import DetailQuote from "./pages/DetailQuote";

import React,{Suspense} from "react";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";


const NewQuote=React.lazy(()=>import('./pages/NewQuote'));
function App() {
  return (
   <Layout>
    <Suspense fallback={<p>Loading......</p>}>
     <Routes>
   <Route path="/" element={<Navigate to="/quotes" />}/>
  
     <Route  path="/quote" element={<AllQuotes/>} />
     <Route path="/quote/:quoteId/*" element={<DetailQuote/>} />
      
    
     <Route path="/new-quote" element={<NewQuote/>} />
     <Route path="*" element={<NotFound/>}/>
   </Routes>
   </Suspense>
   </Layout>
  );
}

export default App;
