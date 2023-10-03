const initialCart = [];
const AddDelItems = (state = initialCart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //check id the product is already in the cart
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //increase the quantity of the product.
                return (
                    state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
                )

            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "DELITEM":
            const exists = state.find((x) => x.id === product.id);
            if (exists.qty === 1) {
                return (
                    state.filter((x) => x.id !== exists.id)
                )
            }
            else {
                //decrease the quantity of the product.
                return (
                    state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
                )
            }

        case "REMOVEITEM":
            const exist2 = state.find((x) => x.id === product.id);
            if (exist2) {
                return (
                    state.filter((x) => x.id !== exist2.id)
                )
            }
            break;
        default: return state;
    }
}

export default AddDelItems;