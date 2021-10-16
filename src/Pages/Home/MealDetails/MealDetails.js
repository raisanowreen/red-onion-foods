import React from 'react';
import { Link } from 'react-router-dom';

const MealDetails = (props) => {
    // console.log(props)
    const {mealId, mealName,mealNote, mealUrl, mealPrice} = props.meal;
    return (
        <div> 
             <div className="col">
             <div className="shadow-lg p-3 mb-5 bg-body rounded h-100">
        <Link style={{textDecoration: "none"}} to={`/singleFood/${mealId}`}>
      <img src={mealUrl} className="card-img-top" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title text-dark">{mealName}</h5>
        <p className="card-text text-secondary">{mealNote}</p>
        <p className="card-text text-dark">$ {mealPrice}</p>
      </div>   
        </Link> </div>
        </div></div>
    
    );
};

export default MealDetails;