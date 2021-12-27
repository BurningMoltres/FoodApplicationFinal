import React from 'react'
import {useContext} from 'react'
import {SelectedArrayContext} from '../Context/SelectedItems'
import { foodApplicationContext } from '../Context/Context'
import Header from './Header';

let cloneArray


export default function CartItems() {
    const[SelectedArrayItemState,changeSelectedArrayItemState]=useContext(SelectedArrayContext);
    const[cartBadgeState,changeCartBadgeState]=useContext(foodApplicationContext);
   

    let counter=0;
function handleRemovedItems(e)
{
    e.preventDefault();

      if(cartBadgeState===0)
      {
        alert("Sorry no items added to cart to remove");
      }
    //for deleting i am cloning the array and then making the state change of original array by just adding it 
    let index=e.target.id;
   
    changeCartBadgeState(cartBadgeState-1);
     cloneArray=[...SelectedArrayItemState];
    console.log(cloneArray[index]);
   cloneArray.splice(index,1);
   console.log(cloneArray);
   changeSelectedArrayItemState(cloneArray);

   
    

    
}

    return (
        <div>
        <Header/>
        {SelectedArrayItemState.map((e)=>(

            <div class="card mb-3 " id="subItemCard" style={{maxWidth: "60%" }} >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={e.imageUrl} id="subItemsImage" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{e.name}</h5>
                  <h6 class="card-title">{e.price}RS</h6>
                  <p class="card-text">{e.description}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  <button id={counter++} type="button" class="btn btn-primary" onClick={(e)=>handleRemovedItems(e)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
           
        ))}
        </div>
    )
}
