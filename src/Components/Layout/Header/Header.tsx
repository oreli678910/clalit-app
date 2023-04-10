import "./Header.css";
import logo from '../../../Assets/Images/cinema.png'

function Header(): JSX.Element {
    return (
        <div className="Header center">
		  Legend Cinema	
          <img src={logo} alt="cinema"/>
        </div>
    );
}

export default Header;
