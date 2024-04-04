import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartView = () =>{

    const { card } = useContext(CartContext)
    return (
        <div>
            <h1>
                <section>
                {
                    card.map(prod => {
                        return (
                            <article key={prod.id}>
                                <h2>{prod.name}</h2>
                            </article>
                        )
                    })
                }
                </section>
                <Link to={'/checkout'}>checkout</Link>
            </h1>
        </div>
    )
}

export default CartView;
