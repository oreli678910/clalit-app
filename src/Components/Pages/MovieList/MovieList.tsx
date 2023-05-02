import { useEffect, useState } from "react";
import "./MovieList.css";
import { MovieModel } from "../../../Models/Movie";
import axios from "axios";
import MovieCard from "../../Shared/MovieCard/MovieCard";

function MovieList(): JSX.Element {
   const [movies,setMovies]=useState<MovieModel[]>([])
   const [search, setSearch]= useState<string>('');

   useEffect(() => {
    axios.get<MovieModel[]>('https://raw.githubusercontent.com/oreli678910/movie/main/movie')
    .then(res=>{setMovies(res.data)})
    .catch(err =>{console.log(err)})
   },[])
    return (
        <div className="MovieList">
			<h1>Movie List</h1>
            <input type="text" placeholder="Search movie's name or genre" 
                value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>

            <div className="movies-display">
            {/* {movies.map(m => <p key={','+m.id}>{m.id},{m.title},{m.genre}</p>)} */}
            {
                (search.length > 0) ?
                movies.filter(m => m.title.toLowerCase().includes(search) || 
                                    m.genre?.toLowerCase().includes(search))
                                    .map(m => <MovieCard key={m.id} movie={m}/>)
                :
                movies.map(m => <MovieCard key={m.title} movie={m}/>)
            }
            </div>
        </div>

           
        
        
    );
}

export default MovieList;
