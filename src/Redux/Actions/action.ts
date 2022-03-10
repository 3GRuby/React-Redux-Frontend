
import { Dispatch } from "redux"
import { productsTypes, ItemAction  } from "../../Types/Types"

export function getProducts(products:productsTypes[]): ItemAction{
    return{
        type: "GET_PRODUCTS",
        payload:{
            products,
        }
    }
}
export function fetchItems(){
 return(dispatch:Dispatch)=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(products=>dispatch(getProducts(products))) 
 }
}

export function addToCart(product:productsTypes): ItemAction{
    return{
        type:"ADD_TO_CART",
        payload:{
            product
        }
    }
}

export function removeItem(Item:productsTypes): ItemAction{
    return{
        type:"REMOVE_ITEM",
        payload:{
            Item
        }
    }
}

export function removeAllItem(){
    return{
        type: "REMOVE_ALL",
    }
}

export function getHandleEvent(keyword:string){
    return{
        type: "GET_FILTER_DATA",
        payload: {
            keyword
        }
    }
}

export function toggleTheme(){
    return{
        type : "TOGGLE_THEME",
    }
}

export function filteredByCategory(category:string){
    console.log("filter action")
    return{
        type : "FILTER_MENS_PRODUCTS",
        payload: {
            category
        }
    }
}

export function sortByValue(sort:String){
    return{
        type:"SORT_VALUES",
        payload:{
            sort
        }
    }
}