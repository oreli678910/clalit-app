import { useEffect, useState } from "react";
import "./MovieList2.css";
import { MovieModel } from "../../../Models/Movie";
import axios from "axios";
import notifyService from "../../../Sevices/NotificationService";
import MovieTable from "../../Shared/MovieTable/MovieTable";

function MovieList2(): JSX.Element {
    
    const [movies,setMovies]=useState<MovieModel[]>([]);
    const [search, setSearch] = useState<string>('');   
    
    //Mounting - componentDidMount
    useEffect(() => {
        axios.get<MovieModel[]>('https://raw.githubusercontent.com/oreli678910/movie/main/movie')
        .then(res=>{setMovies(res.data)
        notifyService.success('Woho!!! I got my movies!!!!')
        })
        .catch(err =>notifyService.error('Ha Ha Ha'));
       },[])
   
       return (
        <div className="MovieList2">
			<h1>Movie List using Table</h1>
            <input type="text" placeholder="Search movie's name or genre" 
             value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            <div>
               {
                (search.length > 0) ?
                <MovieTable movie={movies.filter(m => m.title.toLowerCase().includes(search) ||
                    m.genre?.toLowerCase().includes(search))} />
                :
                 <MovieTable movie={movies}/>       
                }
                
            </div>
       
        </div>
    );
}

export default MovieList2;





