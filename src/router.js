import { Route, Router } from "react-router-dom";
import Home from "./page/home/home";
import Contact from "./page/contact/contact";
import About from "./page/about/about";

const Routers = () => {
    return (
        <Router>
            <Route path="/" element={ <Home/> } />
            <Route path="/Contato" element={ <Contact/> } />
            <Route path="/Sobre" element={ <About/> } />
        </Router>
    );
}

export default Routers;