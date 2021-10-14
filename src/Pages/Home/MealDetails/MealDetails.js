import React from 'react';
import { Link } from 'react-router-dom';

const MealDetails = (props) => {
    console.log(props)
    const {mealId, mealName,mealNote, mealUrl, mealPrice} = props.meal;
    return (
        <div> 
             <div class="col">
             <div class="shadow-lg p-3 mb-5 bg-body rounded h-100">
        <Link style={{textDecoration: "none"}} to={`/singleFood/${mealId}`}>
                 
 
    
      <img src={mealUrl} class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title text-dark">{mealName}</h5>
        <p class="card-text text-secondary">{mealNote}</p>
        <p class="card-text text-dark">$ {mealPrice}</p>
      </div>
   
  

        
        </Link> </div>
        </div></div>
    
    );
};

export default MealDetails;