import React,{useState,useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const[movies,setMovies]=useState([]);
  const [isLoading,setISLoading]=useState(false);
  const [error,setError]=useState(null);

 

  const fetchMoviesHandler=useCallback(async()=>{
    setISLoading(true);
    setError(null);
    try{
        const response=await fetch('https://swapi.dev/api/films/');
        
        if(response.status!=200){
          throw new Error("Unable to load the data")
         
        }
        const data=await response.json();
        const transformedMovies=data.results.map((movieData)=>{
          return {
            id:movieData.episode_id,
            title:movieData.title,
            openingText:movieData.opening_crawl,
            releaseDate:movieData.relase_date
  
          }
        });
        setMovies(transformedMovies);
       

    
      
    }catch (err) {
      setError(err.message)

    }
    setISLoading(false);



  },[])


  useEffect(()=>{
    fetchMoviesHandler();
   

  },[fetchMoviesHandler])

  // async function fetchMoviesHandler(){
    
  

     

   
  // };

  




  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
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
