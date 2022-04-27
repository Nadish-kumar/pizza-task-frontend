import React from 'react'
import base1 from '../../assets/img/pizzabase 1.jpg'
import './Dashboardcontent.css'

const Dashboardcontent = (props) => {
    return (
        <div className='col-lg-4 wordpizza mt-3'>
        <div class="card" >
            <img src={props.productdata.url} className="url__rending" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.productdata.name}</h5>
                    <p class="card-text">{props.productdata.des}</p>
                    <button onClick={() => props.handleAddToCart(props.productdata)}class="btn btn-primary buttonround">Add to your basket  {props.productdata.price}</button>
                </div>
        </div>
        </div>
    )
}

export default Dashboardcontent
