import Card from "../CardWidget/CardWidget"
import classes from '../ItemNavbar/ItemNavbar.module.css';
import List from "../ItemListContainer/ItemListContainer";
import silhat from '../CardWidget/assets/silhat.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <div className={classes.navbar}>
                <Link to={`/`}><img src={silhat} alt="Silueta de sombrero"></img></Link>
                <Link to={`./category/comida`}>Comida</Link>
                <Link to={`./category/entretenimiento`}>Entretenimiento</Link>
                <Link to={`./category/ropa`}>Ropa</Link>
                <Card/>
            </div>
        </header>

    )
}

export default Navbar;