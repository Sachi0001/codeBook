



export const cartReducer = (state, action) => {

    const { type, payload } = action;


    switch (type) {

        case "Add_To_Cart":
            return {...state, cartList : payload.product, total : payload.total}

        case 'Remove_From_Cart':
            return {...state, cartList : payload.product, total : payload.total}

        case "Clear_Cart":
            return {...state, cartList : payload.product, total : payload.total}

        case "UpdateCart":
            return

        default:
             throw new Error("no case found");

    }

}