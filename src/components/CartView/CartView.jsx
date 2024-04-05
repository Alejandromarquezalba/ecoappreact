import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartView = () =>{

    const { cart } = useContext(CartContext)
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {
                    cart.map(prod => {
                        return (
                            <article key={prod.id}>
                                <h2>{prod.name}</h2>
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
