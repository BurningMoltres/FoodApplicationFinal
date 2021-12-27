import {useState,createContext} from 'react';

export const SelectedArrayContext=createContext();

export const SelectedArrayProvider=props=>
{

    
    const[SelectedArrayItemState,changeSelectedArrayItemState]=useState([]);

  return(
      <SelectedArrayContext.Provider value={[SelectedArrayItemState,changeSelectedArrayItemState]}>
            {props.children}
      </SelectedArrayContext.Provider>
  )

}
//<!--commit for git-->