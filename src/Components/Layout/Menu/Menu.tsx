import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<Link to={"home"}>Home 🏡</Link>
			<Link to={"about"}>About</Link>
            <Link to={"catList"}>CatList</Link>
            <Link to={"userList"}>UserList</Link>
            <Link to={"userList2"}>userList2</Link>
            <Link to={"movieList"}>MovieList</Link>
            <Link to={"movieList2"}>MovieList2</Link>
            <Link to={"register"}>Register</Link>
	    </div>
    );
}

export default Menu;
