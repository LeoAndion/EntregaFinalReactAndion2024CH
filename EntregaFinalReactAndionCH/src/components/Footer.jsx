import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: "black", color: "white", padding: "20px", textAlign: "center" }}>
            <div>
            <a href="https://www.instagram.com/delpiano.antonella/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    
                </a>
                <a href="https://www.facebook.com/antonella.delpiano.758/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                   
                </a>
                <a href="https://www.linkedin.com/in/antonelladelpiano/" style={{ color: "white", textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    
                    </a>
            </div>
        </footer>
    );
}


