import { createContext, useState } from 'react';
import { productsArray } from './productStore';


export const CartContext = createContext({
   items: [],
   getProductQuantity: () => {},
   addOneToCart: () => {},
   removeOneFromCart: () => {},
   removeAllFromCart: () => {},
   getTotalPrice: () => {}


});

export function CartProvider({children}){

    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(productId){
        const product = cartProducts.find(product => product.id === productId)?.quantity;
        
        if (product === undefined){
            return 0;
        }

        return product;
    }

    function addOneToCart(id) {
        const quantity =   getProductQuantity(id);

        if(quantity === 0){
            setCartProducts(
                [
                ...cartProducts, 
                {id:id,
                quantity: 1
                }
                ]
            )
        }   
        else{
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                        ? {...product, quantity: product.quantity + 1}
                        : product
                )
            )
        }
    }

    function getTotalPrice() {
        let totalPrice = 0; 
        cartProducts.forEach(cartItem => {
            const product = productsArray.find(p => p.id === cartItem.id);
            if (product) {
                totalPrice += product.price * cartItem.quantity;
            }
        });
        return totalPrice;
    }
    function removeOneFromCart(id) {
        const quantity =   getProductQuantity(id);

        if(quantity === 0){
            removeAllFromCart(id);
        }
        else{
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                        ? {...product, quantity: product.quantity - 1}
                        : product
                )
            )
        }
    }


    function removeAllFromCart(id){
      setCartProducts(
        cartProducts => 
            cartProducts.filter(currentProduct => {
             return currentProduct.id !== id;
       })
    )}

    const contextValue = {
        items: cartProducts,
        getProductQuantity: getProductQuantity,
        addOneToCart: addOneToCart,
        removeOneFromCart: removeOneFromCart,
        removeAllFromCart: removeAllFromCart,
        getTotalPrice: getTotalPrice
    }
    
    return(
        <CartContext.Provider value = {contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;