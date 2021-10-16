import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const SingleFood = () => {
    const {foodId} = useParams();
    const [meal, setMeal] = useState({});

    useEffect( () =>{
        fetch('/meals.json')
        .then(res => res.json())
        .then(data => {
            const p = data.find(m => m.mealId == foodId)
            setMeal(p)
        })
    }, [foodId]);

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h6 className="m-4">Breakfast</h6>
                <h6 className="m-4">Lunch</h6>
                <h6 className="m-4">Dinner</h6>
            </div>
        <div className="mt-5"> 
            <div class="ms-5 ps-5">
  <div class="row g-0">
    <div class="col-md-4 p-5">
      <div class="card-body">
        <h5 class="card-title fs-1">{meal.mealType}</h5>
        <p class="card-text mt-5 text-secondary">{meal.mealDetails}</p>
       <div className="d-flex mt-2 mb-2">
       <p class="card-text fs-2"><small class="text-dark">$ {meal.mealPrice}</small></p>
        <button type="button" class="btn btn-outline-secondary rounded-pill ms-4 px-4 py-0"><i class="fas fa-plus me-3"></i>1<i class="fas fa-minus ms-3"></i></button>
       </div>
        <Link to="/userinfo"><button type="button" class="btn btn-danger rounded-pill px-4"><i class="fas fa-shopping-cart me-3"></i>Add</button></Link>
      </div>
    </div>
    <div class="col-md-8 ps-5">
      <img src={meal.mealUrl} class="img-fluid rounded-start" alt="..."/>
    </div>
    
  </div>
</div> 


        </div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div className="d-flex">
    <img src="https://i.ibb.co/1T2SHqL/breakfast4.png" class="d-block w-25 m-5" alt="..."/>
      <img src="https://i.ibb.co/CBCdvyW/breakfast2.png" class="d-block w-25 m-5" alt="..."/>
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className="d-flex">
    <img src="https://i.ibb.co/RHcyvVg/breakfast3.png" class="d-block w-25 m-5" alt="..."/>
      <img src="https://i.ibb.co/Bcs2X4Y/breakfast1.png" class="d-block w-25 m-5" alt="..."/>
    </div>
    </div>
    <div class="carousel-item">
    <div className="d-flex">
    <img src="https://i.ibb.co/nn1GTmC/breakfast6.png" class="d-block w-25 m-5" alt="..."/>
      <img src="https://i.ibb.co/Hr16Fm4/breakfast5.png" class="d-block w-25 m-5" alt="..."/>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default SingleFood;