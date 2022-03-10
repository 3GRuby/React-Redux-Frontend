import productReducer from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ productReducer});
export type rootStateType = ReturnType<typeof rootReducer>

export default rootReducer;