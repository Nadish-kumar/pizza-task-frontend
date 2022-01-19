import React from 'react'
import { Formik } from 'formik'

const Payment = () => {



    
    return (
       <div className='container'>
           <div className='row'>
        
           <div class="row my-5">
        <div class="col-md-4 offset-md-4">
        <h1>Payment</h1>
          <div class="card">
            <div class="card-body">
              <form class="" action="/paynow" method="post">
                <div class="form-group">
                  <label for="">Name: </label>
                  <input class="form-control" type="text" name="name" value="" />
                </div>
                <div class="form-group">
                  <label for="">Email: </label>
                  <input class="form-control" type="text" name="email" value="" />
                </div>
                <div class="form-group">
                  <label for="">Phone: </label>
                  <input class="form-control" type="text" name="phone" value="" />
                </div>
                <div class="form-group">
                <label for="">Amount: </label>
                <input class="form-control" type="text" name="amount" value="" />
              </div>
              <div class="form-group">
                <button class="btn form-control btn-primary">Pay Now</button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
           </div>
       </div>
    )
}

export default Payment
