import { combineReducers, createStore } from "redux";
import CounterReducer from "./CounterReducer";

const Store = createStore(combineReducers({ counter: CounterReducer }));
export default Store;
