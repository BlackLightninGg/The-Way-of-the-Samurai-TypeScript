import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";

export type ReducersType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profileData: profileReducer,
    messagesData: messagesReducer
})
export const reduxStore = createStore(reducers)