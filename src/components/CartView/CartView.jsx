import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartView = () =>{

    const { cart, removeItem } = useContext(CartContext)
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {
                    cart.map(prod => {
                        return (
                            <article key={prod.id}>
                                <h2>{prod.name}</h2>
                                <button onClick={()=>removeItem(prod.id)}>Borrar</button>
                            </article>
                        )
                    })
                }
                <Link to={'/checkout'}>Link para ir al checkout</Link>
            </h1>
        </div>
    )
}
export default CartView;
