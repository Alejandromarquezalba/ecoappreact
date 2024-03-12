import { Link } from 'react-router-dom'

const Item = ({ id, name, category, img, edad})=>{
    return(
        <div>
            <h2>Categoría: {category}</h2>
            <h2>Nombre: {name}</h2>
            <img src={img} style={{width:200, height:200}}/>
            <p>Edad: {edad}</p>
            <Link to={`./item/${id}`}>Ver más</Link>
        </div>
    )
}

export default Item;