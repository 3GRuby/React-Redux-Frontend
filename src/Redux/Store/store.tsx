import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootStateType } from "../Reducers";

function saveToLocalStorage(state:rootStateType){
    try {
        const localStorageState = JSON.stringify(state)
        localStorage.setItem("state",localStorageState);
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    const localStorageState = localStorage.getItem("state")
    if(localStorageState === null) return undefined
    return JSON.parse(localStorageState)
}

const storeFactory = () => {
    const middleware = [thunk]
    const reduxStore = createStore(rootReducer,loadFromLocalStorage(),
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
    reduxStore.subscribe(()=> saveToLocalStorage(reduxStore.getState()))
    return reduxStore
}
export default storeFactory;