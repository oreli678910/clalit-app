import "./Footer.css";

function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
			<p> All rights reserved to Orel Ovadia {year} &copy;</p>
        </div>
    );
}

export default Footer;
