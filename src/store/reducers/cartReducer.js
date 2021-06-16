import { ADD_TO_CARD } from "../actions/cardActions";
import { cartItems } from "../initialValues/cartItems";

const initialState={
    cartItems:cartItems
}


export default function cartReducer(state=initialState,{type,payload}){
        switch (type) {
            case ADD_TO_CARD:
                let product=state.cartItems.find(c=>c.product.id===payload.id)
                break;
        
            default:
                break;
        }
}