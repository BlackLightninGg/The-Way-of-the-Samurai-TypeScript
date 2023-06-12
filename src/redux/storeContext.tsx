import React from "react";
import {reduxStore} from "./reduxStore";


export const StoreContext = React.createContext(reduxStore)


export const Provider = (props: any): any => {
    return <StoreContext.Provider value={reduxStore}>
        {props.children}
    </StoreContext.Provider>
}