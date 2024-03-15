import {  useContext, useReducer } from "react";
import { filterReducer } from "../Reducers";

const { createContext } = require("react")


const filterInitial = {
productList : [],
inStockOnly : false,
bestSellerOnly : false,
sortBy : null,
rating : null

}


const FilterContext = createContext(filterInitial);

export const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducer, filterInitial)
    
    const initialState = (products) =>{
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }
        })
    };
    
    const bestSeller = (products) => {
        return state.bestSellerOnly? products.filter(product => product.best_seller === true) : products ;
    }
    
    const inStock = (products) => {
        return state.inStockOnly? products.filter(product => product.in_stock === true) : products ;
    }
    
    const sort = (products) => {
    
        if (state.sortBy==="lowtohigh"){
            return products.sort((a,b)=> Number(a.price) - Number(b.price))
        }

        if (state.sortBy === "hightolow"){
            return products.sort((a,b)=> Number(b.price) - Number(a.price))
        }
        return products;
    }
    
    const ratingProducts = (products) => {
    
        if(state.rating === "4STARS ABOVE") {
            return products.filter(product => product.rating >=4)
        }
    
        if(state.rating === "3STARS ABOVE") {
            return products.filter(product => product.rating >=3)
        }
    
        if(state.rating === "2STARS ABOVE") {
            return products.filter(product => product.rating >=2)
        }
        if(state.rating === "1STAR ABOVE") {
            return products.filter(product => product.rating >=1)
        }
    
        return products ;
    }
    
    const filteredProductList = ratingProducts(sort(inStock(bestSeller(state.productList))));


    const value={
        state,
        dispatch,
        initialState,
        productList: filteredProductList,
    };
    
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
    
}

export const useFilter = () =>{
const filter = useContext(FilterContext);

return filter;

}


