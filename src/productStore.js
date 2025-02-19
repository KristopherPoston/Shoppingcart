// Wooden Table: price_1Qt8piRn5fu1Mx8bfRNQXeLz
// Puffer Jacket: price_1Qt8uSRn5fu1Mx8bG2zBqwSn
// Camera: price_1Qt8xWRn5fu1Mx8bcCaqv5kl


const productsArray = [
    {
        id: "price_1Qt8uSRn5fu1Mx8bG2zBqwSn",
        name: 'Puffer Jacket',
        price: 100
    },
    {
        id: "price_1Qt8piRn5fu1Mx8bfRNQXeLz",
        name: 'Wooden table',
        price: 200
    },
    {
        id: "price_1Qt8xWRn5fu1Mx8bcCaqv5kl",
        name: 'Camera',
        price: 500
    }
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)
    
    if (productData == undefined){
        console.log("Product data does not exist for ID: ", id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };