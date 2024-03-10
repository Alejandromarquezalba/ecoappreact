const useCount = (ValorInicial = 0)=>{
    const [cuenta, setCuenta] = useState(ValorInicial);

    const crecer = () => {
        setCuenta(prev => prev + 1)
    }
    
    const disminuir = () => {
        setCuenta(prev => prev -1)
    }

    return(
        cuenta,
        crecer,
        disminuir
    )
}



