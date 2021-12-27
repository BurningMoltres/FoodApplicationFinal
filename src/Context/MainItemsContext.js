import {useState,createContext} from 'react';

export const MainArrayContext=createContext();

export const MainArrayProvider=props=>
{

    
    const[mainArrayItemState,changeMainArrayItemState]=useState([]);

   return(
       <MainArrayContext.Provider value={[mainArrayItemState,changeMainArrayItemState]}>
        {props.children}
       </MainArrayContext.Provider>
   )



}
//<!--commit for git-->