//add item in the cart
export const AddItemToCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

//delete item from the cart
export const DeleteItemFromCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

//remove item from the cart
export const RemoveFromCart = (product) => {
    return {
        type: "REMOVEITEM",
        payload: product
    }
}