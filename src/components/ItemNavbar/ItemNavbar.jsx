import Card from "../CardWidget/CardWidget"
import classes from '../ItemNavbar/ItemNavbar.module.css';
import List from '../ItemListContainer/ItemListContainer';
import silhat from '../CardWidget/assets/silhat.png'

const Navbar = () => {
    return(
        <div className={classes.navbar}>
            <img src={silhat} alt="Silueta de sombrero"></img>
            <List greeting='Cuadrado'>1</List>
            <List greeting='Círculo'>2</List>
            <List greeting='Triángulo'>3</List>
            <List greeting='híper dodecaedro'>4</List>
            <Card/>
        </div>
    )
}

export default Navbar;

