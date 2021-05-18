import {Link as Link1} from 'react-scroll';
import {Link} from "react-router-dom"
import "./styles.css"

function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <Link to="/" >
                <a class="navbar-brand" href="#">Project Name</a>
                </Link>
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        Menu
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active mx-0 mx-lg-1">
                    <Link  to="/" spy={true} smooth={true}>
                        <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Home <span class="sr-only">(current)</span></a>
                    </Link>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                    <Link1  to="/about" spy={true} smooth={true}>
                        <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">About</a>
                        </Link1>
                    </li>
                    
                    <li class="nav-item mx-0 mx-lg-1">
                    <Link  to="/contact" spy={true} smooth={true}>
                        <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Contact</a>
                    </Link>
                    </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        );
}

export default Navbar;