import { ItemAction,InitialStateType,productsTypes } from "../../Types/Types";

const initialState: InitialStateType={
    products:[],
    filtereProduct:[],
    cart:[],
    theme:"light",
    category : "",
    sort:"",
}

function productReducer(state = initialState, action:ItemAction){
    
    switch (action.type) {
        
        case "GET_PRODUCTS":{
            return{
                ...state,
                products:action.payload.products,
                filtereProduct: action.payload.products,
            }
        } 

        case "ADD_TO_CART":{
            const {product} = action.payload
            return{
                ...state,
                cart:[...state.cart,
                       product]
            }
        }

        case "REMOVE_ITEM":{
            let updateCart = state.cart.filter((cartItem)=>cartItem !== action.payload.Item)
            return{
                ...state,
                cart:updateCart
            }
        }

        case "REMOVE_ALL":{
            return{
                ...state,
                cart:[]
            }
        }

        case "GET_FILTER_DATA":{
            let filteredItem = state.products.filter((filterItem:productsTypes)=>{
                return(
                    filterItem.title.toLocaleLowerCase()
                    .search(action.payload.keyword.toLocaleLowerCase()) !== -1
                )
            });
            return{
                ...state,
                filtereProduct: filteredItem
            }
        }

        case "TOGGLE_THEME":{
            return{
                ...state,
                theme:state.theme === "light" ? "secondary" : "light"
            }
        }

        case "FILTER_MENS_PRODUCTS":{
            console.log("filter reducer")
            const productList = [...state.products] 
            const categorizeList = productList.filter((product)=>{
              return product.category === action.payload.category;
          })
            if(action.payload.category === "All"){

                return{
                    ...state,
                    filtereProduct:productList
                }
            }
            return{
                ...state,
                filtereProduct: categorizeList,
                category: action.payload.category  
            }
        }

        case "SORT_VALUES":{
               const allProducts = [...state.filtereProduct];
               if(action.payload.sort === "default"){
                   allProducts.sort((a,b)=> a.title.localeCompare(b.title))

               }else if(action.payload.sort === "Z-A"){
                    allProducts.sort((a, b) => b.title.localeCompare(a.title));
                } else if(action.payload.sort === "price" ){
                    allProducts.sort((a, b)=> a.price - b.price);
                }else if(action.payload.sort === "rating"){
                    allProducts.sort((a, b)=> b.rating.count - a.rating.count)
                } 
            return{
                ...state,
                filtereProduct:allProducts,
                sort: action.payload.sort
 

            }
        }

            
        default:
           return state;
           
    }
    
}

export default productReducer 