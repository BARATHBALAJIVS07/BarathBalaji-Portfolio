import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Contact  from "./contact";
import "../style/mystyle.css";
function Navbar()
{
    return(
        <body>
            <div className="navcss">
                
            <header className="navheadcss">
                <p style={{fontFamily:'Agustina',fontSize:'30px',color:'white'}}>Barath  Balaji  Venugopal   Santhakumar</p>
                <Router>
                    <br></br><br></br>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                    </nav>
                    
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                </Router>
                
            </header>
            </div>
        </body>
    );
}
export default Navbar;