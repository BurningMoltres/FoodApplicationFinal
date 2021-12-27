import { useState,createContext } from "react";

export const foodApplicationContext=createContext();

export const CartBadgeProvider=props=>{

    const[cartBadgeState,changeCartBadgeState]=useState(0);

    return(
        <foodApplicationContext.Provider value={[cartBadgeState,changeCartBadgeState]}>
        
        {props.children}
        
        </foodApplicationContext.Provider>)
}
//<!--commit for git-->