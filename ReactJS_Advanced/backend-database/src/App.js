import React,{useState,useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {

  const[movies,setMovies]=useState([]);
  const [isLoading,setISLoading]=useState(false);
  const [error,setError]=useState(null);

 

  const fetchMoviesHandler=useCallback(async()=>{
    setISLoading(true);
    setError(null);
    try{
        const response=await fetch('https://react-http-b4b85-default-rtdb.firebaseio.com/movies.json');
        
        if(response.status!=200){
          throw new Error("Unable to load the data")
         
        }
        const data=await response.json();
        const loadedMovies=[];
        for(const key in data){
          loadedMovies.push({
            id:key,
            title:data[key].title,
            openingText:data[key].openingText,
            releaseDate:data[key].releaseDate
          })
        }
      
        setMovies(loadedMovies);
       

    
      
    }catch (err) {
      setError(err.message)

    }
    setISLoading(false);



  },[])
  
  


  useEffect(()=>{
    fetchMoviesHandler();
   

  },[fetchMoviesHandler])

async function addMoviehandler(movie){
 const response= await fetch('https://react-http-b4b85-default-rtdb.firebaseio.com/movies.json',{
    method:"POST",
    body:JSON.stringify(movie),
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data=await response.json();
  console.log(data);
}

  return (
    <React.Fragment>
    <section>
      <AddMovie onAddMovie={addMoviehandler}/>
    </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0  && <MoviesList movies={movies} />}
        {!isLoading && movies.length==0 && !error &&<p>Not Found</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
