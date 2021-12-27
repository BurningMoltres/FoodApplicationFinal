import React from 'react'
//calling our api
import { useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainArrayContext } from '../Context/MainItemsContext';
export default function MainItems() {

  const[mainArrayItemState,changeMainArrayItemState]=useContext(MainArrayContext);
  console.log(mainArrayItemState);

  //adding the useeffect  hook so that i avoid the rerender on state change for my array
  useEffect(()=>{
    async function getdetails()
    {
              const getResponse=await fetch("completeDetails/get",{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
            
                method:"GET",
              
    
              }
              ).then(response=>response.json())
              .then(data=>changeMainArrayItemState([...data]));
            }
            getdetails();
          },[]);
      
   

   
    let counter=0;

   

    return (
     //<!--commit for git-->
        <div class="container d-flex justify-content-center flex-row bd-highlight mb-3 ms-3">
        
      {
        mainArrayItemState.map((e)=>(
          <div class="card" id="mainCard" style={{ width: '18rem' }} >
          <img src={e.image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{e.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <Link to={`/subItems/${counter}`}>
            <button type="button" id={counter}   class="btn btn-primary">Primary</button>
            </Link>
          {counter++}
          </div>
        </div>
                  //completed 
        ))
      }
      </div>
      
    )
}
