import Card from "../CardWidget/CardWidget"
import classes from '../ItemNavbar/ItemNavbar.module.css';
import List from '../ItemListContainer/ItemListContainer';
import silhat from '../CardWidget/assets/silhat.png'

const Navbar = () => {
    return(
        <div className={classes.navbar}>
            <img src={silhat} alt="Silueta de sombrero"></img>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <Card/>
        </div>
    )
}

export default Navbar;

