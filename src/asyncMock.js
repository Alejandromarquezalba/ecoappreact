const products = [
    {
        id: '1',
        name: 'Patatas',
        img: 'png',
        edad: 42,
        category: 'comida',
        stock: 8
    },
    {
        id: '2',
        name: 'Televisor',
        img: 'gif',
        edad: 43,
        category: 'entretenimiento',
        stock: 9
    },
    {
        id: '3',
        name: 'Sombrero',
        img: 'zip',
        edad: 41,
        category: 'ropa',
        stock: 10
    }
]


export const getProducts = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{res(products)
        },100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((res)=>{
        setTimeout(()=>{
            res(products.filter(prod => prod.category == categoryId))
        },1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise ((res)=>{
        setTimeout(()=>{
            res(products.find(prod => prod.id == itemId))
        }, 100)
    })
}