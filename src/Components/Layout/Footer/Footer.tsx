import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="Footer center">
			<p> All rights reserved to Orel Ovadia {year} &copy;</p>
            <SocialMedia/>
        </div>
    );
}

export default Footer;
