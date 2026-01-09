import './header.css'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <div>
                <span>CantinhoDaVal</span>
            </div>
            <div className="Link">
                <Link to="/">Home</Link>
                <Link to="/Services">Serviços</Link>
                <Link to="/Contact">Contato</Link>
                <Link to="/About">Sobre</Link>
            </div>
        </header>
    );
}

export default Header;