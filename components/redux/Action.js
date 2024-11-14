import {ADD_TO_CART, REMOVE_FROM_CART} from './Constant'

export function addToCart(item){
    return {
        type:ADD_TO_CART,
        data:item
    }
}

    export function RemoveCart(item){
        return {
            type:REMOVE_FROM_CART,
            data:item
        }
}