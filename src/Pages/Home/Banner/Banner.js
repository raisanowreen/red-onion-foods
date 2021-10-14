import React from 'react';
import banner from '../../../images/bannerbackground.png';

const Banner = () => {
    return (
        <div class="card text-white image-sizing">
  <img src={banner} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <h1 className="text-center mt-5 pt-5 text-dark">Best food waiting for your belly</h1>
  <div class="input-group mb-3 pt-2 w-25 mx-auto">
  <input type="text" class="form-control" placeholder="Search Food Items" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button type="button" class="btn btn-danger">Search</button>
</div>
  </div>
</div>
        
    );
};

export default Banner;