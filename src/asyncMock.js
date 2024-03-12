const products = [
    {
        id: '1',
        name: 'Patatas',
        img: 'https://clinicacisem.com/wp-content/uploads/2019/04/patatas.jpg',
        edad: 42,
        category: 'comida',
        stock: 8
    },
    {
        id: '2',
        name: 'Televisor',
        img: 'https://resizer.glanacion.com/resizer/v2/asi-son-los-minusculos-televisores-DEIBSPVNEZGNNEJAG4HGKKCVHM.jpg?auth=5384d842dbb95fcc3780bc5821ec1f34e2f856078717fc2f4b1ee2d1ed539917&width=880&height=586&quality=70&smart=true',
        edad: 43,
        category: 'entretenimiento',
        stock: 9
    },
    {
        id: '3',
        name: 'Sombrero',
        img: 'https://http2.mlstatic.com/D_NQ_NP_909889-MLA74254554850_022024-O.webp',
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