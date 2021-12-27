import React from 'react'
import Header from './Header'

//to get our id passed in link i need to use the link use params of react-router-dom
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MainArrayContext } from '../Context/MainItemsContext';
import { foodApplicationContext } from '../Context/Context'
import { SelectedArrayContext } from '../Context/SelectedItems';

export default function SubItems() {
    const params=useParams();
    let index=params.id;

    const[mainArrayItemState,changeMainArrayItemState]=useContext(MainArrayContext);
    const[cartBadgeState,changeCartBadgeState]=useContext(foodApplicationContext);
    const[SelectedArrayItemState,changeSelectedArrayItemState]=useContext(SelectedArrayContext);
 
//<!--commit for git-->
    function handleAddedItems(e)
    {
        e.preventDefault();
        let index2=e.target.id;
        
       changeCartBadgeState(cartBadgeState+1);
        
       changeSelectedArrayItemState(SelectedArrayItemState.concat({
           "category":mainArrayItemState[index].subItemsData.subItems[index2].category,
           "name":mainArrayItemState[index].subItemsData.subItems[index2].name,
           "price":mainArrayItemState[index].subItemsData.subItems[index2].price,
           "imageUrl":mainArrayItemState[index].subItemsData.subItems[index2].imageUrl,
           "description":mainArrayItemState[index].subItemsData.subItems[index2].description
       }))
    
       
    }

    
    let counter=0;

    return (

      
        <div >
        <Header/>
        {mainArrayItemState[index].subItemsData.subItems.map((e)=>(

            <div class="card mb-3 " id="subItemCard" style={{maxWidth: "60%" }} >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={e.imageUrl} id="subItemsImage" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{e.name}</h5>
                  <h6 class="card-title">{e.price}Rs</h6>
                  <p class="card-text">{e.description}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  <button id={counter++} type="button" class="btn btn-primary" onClick={(e)=>handleAddedItems(e)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )

          
            
        )}
          
            
        </div>
    )
}
