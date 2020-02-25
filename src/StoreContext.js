import * as React from "react";

const StoreContext=React.createContext(null);

export const Provider=(props)=>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
        <div>
        </div >
    </StoreContext.Provider>
};

export  default StoreContext;
