import { MovieModel } from "../../../Models/Movie";
import "./MovieCard.css";
interface MovieCardProps{
    movie:MovieModel;
}
function MovieCard(props:MovieCardProps): JSX.Element {
    return (
        <div className="MovieCard">
			<p>id : {props.movie.id}</p>
			<p>title : {props.movie.title}</p>
			<p>genre : {props.movie.genre}</p>
			<p>rating : {props.movie.rating}</p>
			<p>year : {props.movie.year}</p>
			<p>director : {props.movie.director}</p>
            <img src={props.movie.image} alt={props.movie.director}/>
        </div>
    );
}

export default MovieCard;
