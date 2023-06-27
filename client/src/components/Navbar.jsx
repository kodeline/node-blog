import Logo from "../img/kodev.png"
import { Link } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
  return(
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" width={150} />
          </Link>    
        </div>
        <div className="links">
          <Link className="link" to="cat=javascript">
            <h4>HTML</h4>
          </Link>
          <Link className="link" to="cat=javascript">
            <h4>CSS</h4>
          </Link>
          <Link className="link" to="cat=javascript">
            <h4>JAVASCRIPT</h4>
          </Link>
          <Link className="link" to="cat=javascript">
            <h4>PYTHON</h4>
          </Link>
          <span>Joaquin</span>
          <span>Desconectarse</span>
          <span className="write">
            <Link className="link" to={"/write"}>Publicar</Link>
          </span>
        </div>  
      </div>
    </div>
  )
}

export default Navbar