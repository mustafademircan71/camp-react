export const ADD_TO_CARD="ADD_TO_CARD"
export const REMOVE_TO_CARD="REMOVE_FROM_CARD"

export function addToCart(product){
        return {
            type : ADD_TO_CARD,
            payload : product
        }
}

export function removeFromCart(product){
    return {
        type :REMOVE_FROM_CARD,
        payload : product
    }
}