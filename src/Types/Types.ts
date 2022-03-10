export type productsTypes = {
    id: number
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
    rating: {
        rate: number,
        count: number
    }
}
export type InitialStateType = {
    products: productsTypes[];
    cart: productsTypes[];
    filtereProduct: productsTypes[];
    theme: string;
    category: string;
    sort:string;
}

export type GetItemsType = {
    type: "GET_PRODUCTS";
    payload: {
        products: productsTypes[];
    };
};

export type AddToCartAction = {
    type: "ADD_TO_CART";
    payload: {
        product: productsTypes
    }
}

export type RemoveItemAction = {
    type: "REMOVE_ITEM";
    payload: {
        Item: productsTypes
    }
}

export type RemoveAllItemAction = {
    type: "REMOVE_ALL"
}

export type getHandleEventAction = {
    type: "GET_FILTER_DATA",
    payload: {
        keyword: string
    }
}

export type toggleTheme = {
    type: "TOGGLE_THEME",
}

export type filteredByCategory= {
    type : "FILTER_MENS_PRODUCTS",
    payload:{
        category : string;
    } 
}

export type sortByValue= {
    type : "SORT_VALUES",
    payload:{
        sort: string;
    } 
}

export type ItemAction = GetItemsType | AddToCartAction | RemoveItemAction | RemoveAllItemAction | getHandleEventAction | toggleTheme | filteredByCategory | sortByValue