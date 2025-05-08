import { Link } from "react-router-dom";
import "./navBar.css";


function Navbar(props) {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> <span id={props.home}>Home</span> </Link>
      
      <Link className="fonte" id="link" to="/calcados"> <span id={props.pg1}>Calcados</span> </Link>

      <Link className="fonte" id="link" to="/camisas"> <span id={props.pg2}>Camisas</span> </Link>

      <Link className="fonte" id="link" to="/oculos"> <span id={props.pg3}>Oculos</span> </Link>

      <Link className="fonte" id="link" to="/jaquetas"> <span id={props.pg4}>Jaquetas</span> </Link>
    </nav>
  );
}
export default Navbar;