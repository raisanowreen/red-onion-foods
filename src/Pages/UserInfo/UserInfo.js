import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <h6 className="m-4">Breakfast</h6>
                <h6 className="m-4">Lunch</h6>
                <h6 className="m-4">Dinner</h6>
            </div>
            <div className="d-flex justify-content-around m-5 ps-5">
                <div>
                <form className="mt-5 mb-5">
                    <h4>Edit delivery details</h4>
                    <hr />
  <div class="mb-3">
   <input type="text" class="form-control bg-light" placeholder="Delivery to door" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
  </div>
  <div class="mb-3">
    <input type="text" class="form-control bg-light" placeholder="Building" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <input type="text" class="form-control bg-light" placeholder="Road" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <input type="text" class="form-control bg-light" placeholder="City" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <input type="text" class="form-control bg-light" placeholder="Delivery Instructions" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-danger px-5 ms-2 mb-3" style={{height:"50px", width:"310px"}}>Save & Continue</button>
</form>
                </div>

                <div>
<div class="mt-5 ms-5 ps-5">
  <div class="card-body">
    <h5 class="card-title">Arriving in 20 minutes</h5>
    <p class="card-text mb-3">From Gulshan to Dhanmondi</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item mb-1">Subtotal</li>
    <li class="list-group-item mb-2">Tax</li>
    <li class="list-group-item mb-3">Delivery</li>
    <li class="list-group-item mb-3">Total</li>
  </ul>
  <div class="card-body">
    <Link><button type="submit" class="btn btn-danger px-5 ms-2 mb-3" style={{height:"50px", width:"310px"}}>Place order</button></Link>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;