import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return(
        <div style={{display:"flex", gap:75, justifyContent: "center"}}>{
            products.map(product => {
                return <Item key={product.id} {...product}/>
                
            })   
        }
        </div>
    )
}

export default ItemList;