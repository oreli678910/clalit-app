import "./Header.css";
import { BsFillBalloonFill, BsFillEmojiKissFill } from "react-icons/bs";
import logo from '../../../Assets/Images/cinema.png'

function Header(): JSX.Element {
    return (
        <div className="Header">
		 <BsFillBalloonFill size={32} />
         <h1> Legend Cinema	</h1>
          <img src={logo} alt="cinema"/>
        </div>
    );
}

export default Header;
