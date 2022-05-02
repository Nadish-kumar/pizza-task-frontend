import React from 'react'
import base1 from '../../assets/img/pizzabase 1.jpg'
import './Dashboardcontent.css'

const Dashboardcontent = (props) => {
    return (
        // <div className='cardcontainer'>
        <div className="card">
          <img src={props.productdata.url}/>
          <div className='som'>
    
          <h2>{props.productdata.name}</h2>
          <p>{props.productdata.des}</p>
          <button onClick={() => props.handleAddToCart(props.productdata)} className="btn btn-primary">Add to your basket  {props.productdata.price}</button>
          </div>
          
        </div>
   
        // </div>
      
    )
}

export default Dashboardcontent

{/* <div className='col-lg-4 card__wordpizza mt-3'>
<div >
    <img src= className="url__rending" alt="..."/>
        <div>
            <h5></h5>
            <p ></p>
            <button class="btn btn-primary buttonround"></button>
        </div>
</div>
</div> */}