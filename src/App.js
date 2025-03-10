
import './App.css';
import React, {useState} from 'react';
import HomePage from './NetflixHomePage';
import MoviesList from './MoviesList';
import LocationSelector from './LocationSelector'
import LocSelectorDropDown from'./dropDownBox'
import UserDirectory from './UserDirectory'
import QuizeQuestions  from './QuizeQuestions';
import MangeUsers from './MangeUsers'
function App() {
  
  const [count, setCount] = useState(0);  
  const [search, setSearch]=useState('')
  const [moviesData, setData] = useState([]);
  const [allMovieData, setAllMovieData] = useState([]);
  const [tglSrcGoBack, setTglSrcGoBack] = useState(false);
  const SearchHandle = () => {
   
    if(search.trim().length>0){
    
        const filteredMovies = search.toLowerCase().length===0? allMovieData : allMovieData.filter((movie) =>
        movie.Title.toLowerCase().includes(search.toLowerCase())
            
    );
    setData(filteredMovies);  // Update the movie data with filtered results
    setTglSrcGoBack(true);
    setSearch('')
    console.log(search.toLowerCase(),"Search text")
    console.log(allMovieData,"Total movie data")
    console.log(moviesData,"move data list is here")
  }
};

    
  return (

    <div className="App">
    <h1>  Moives Now App</h1> 
    {/* <LocSelectorDropDown></LocSelectorDropDown>  */}
      <LocationSelector></LocationSelector>  
    <UserDirectory></UserDirectory> 
     <HomePage setData={setData} watchLaterCount={count} searchValue = {search} setSearch = {setSearch} SearchHandle = {SearchHandle} allMovieData={allMovieData} tglSrcGoBack={tglSrcGoBack} setTglSrcGoBack={setTglSrcGoBack}></HomePage> 
     <MoviesList setCount={setCount} searchValue={search}  moviesData={moviesData} setData={setData}  setAllMovieData={setAllMovieData}></MoviesList> 
  
      {/* <QuizeQuestions></QuizeQuestions>  */}
      {/* <MangeUsers></MangeUsers>  */}
    </div>

  );
}
export default App;
