const useCount = ()=>{
    const [cuenta, setCuenta] = useState(0);

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



