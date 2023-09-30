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
