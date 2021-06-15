import modalReducer from "./modalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    modal : modalReducer
});

export default allReducers;