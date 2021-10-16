import React, { useEffect, useState } from 'react';
import MealDetails from '../MealDetails/MealDetails';

const Foods = () => {
    const [meals, setMeals] = useState([])

    useEffect(() =>{
        fetch('meals.json')
        .then(res => res.json())
        .then(data => setMeals(data))
    },[]);

    return (
             <div>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-5 p-5">
            {
                meals.map(meal => <MealDetails
                id= {meals.mealId}
                meal= {meal}
                ></MealDetails>)
            }
            </div>
        </div>
    );
};

export default Foods;