import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ name, category, img, edad, description, stock})=>{
    return(
        <div>
            <h2>Categoría: {category}</h2>
            <h2>Nombre: {name}</h2>
            <img src={img} style={{width:200, height:200}}/>
            <p>Edad: {edad}</p>
            <p>Descripción: {description}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemDetail;