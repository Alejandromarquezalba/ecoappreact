const Checkout = ()=>{

    const createOrder = ()=>{
        const objetctOrder = {
            buyer : {},
            items: [],
            total: 0
        }
    }
    return(
        <div>
            <h2>Checkout</h2>
            <h3>Armardo de Formulario</h3>
            <button onClick={createOrder}>Boton de generar la compra</button>
        </div>

    )
}


export default Checkout;