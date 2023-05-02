import { MovieModel } from "../../../Models/Movie";
import "./MovieTable.css";


interface MovieTableProps{
     movie:MovieModel[];
}

function MovieTable(props: MovieTableProps): JSX.Element {
    const tableHeaders=['Id', 'Title', 'Director',"Genre","Rating", "Image"] 
    
    return (
        <div className="MovieTable">
			 <table>
                <thead>
                    <tr>
                        {tableHeaders.map(str => <th key={str}>{str}</th>)}
                    </tr>
                </thead>
                <tbody>
                        {props.movie.map(m =>
                            <tr key={'m'+m.id}>
                                <td>{m.id}</td>
                                <td>{m.title}</td>
                                <td>{m.director}</td>
                                <td>{m.genre}</td>
                                <td>{m.rating}</td>
                                <td>
                                <img src={m.image} alt={m.title}/>
                                </td>
                                </tr>
                            )}
                </tbody>
            </table>
        </div>
    );
}

export default MovieTable;
