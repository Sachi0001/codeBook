import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../Reducers/cartReducers"

const initialState = {
    cartList:[],
    total:0
}


const CartContext = createContext(initialState)

export const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(cartReducer,initialState)

const addToCart = (product) =>{
const updatedCartList = state.cartList.concat(product);
const updatedTotal = state.total + product.price

dispatch({
    type:"Add_To_Cart",
    payload :{
        product : updatedCartList,
        total : updatedTotal
    }
})

}


const removeFromCart = (product) =>{
const updatedCartList = state.cartList.filter((item)=>(item.id !== product.id))
const updatedTotal = state.total - product.price

dispatch({
    type:"Remove_From_Cart",
    payload :{
        product : updatedCartList,
        total : updatedTotal
    }
})

}

const clearCart = () =>{

    const cartList=[];
    const total = 0;

    dispatch({
        type:"Clear_Cart",
        payload :{
            product : cartList,
            total : total
        }
    })

}

    const value={
cartList:state.cartList,
total:state.total,
addToCart,
removeFromCart,
clearCart

    }

    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = ()=>{
const context =  useContext(CartContext)
return context
}
