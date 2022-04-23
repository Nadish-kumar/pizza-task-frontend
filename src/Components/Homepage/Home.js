import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='topContainer'>
     
       <div className='container-fluid pizzza__page'>
           <div className='row text'>
            <div className='col-lg-12 header__desing'>
            <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">Home</h3>
      <div class="nav nav-masthead justify-content-center float-md-end">
        <Link to="/userlogin"><button className='header__option header btn btn-outline-warning'>Login</button></Link>
     <Link to="/userreg"><button  className='header__option header btn btn-outline-warning'>Sign-Up</button></Link> 
        <Link to='/admin'><button className='header__option header btn btn-outline-warning'>Admin</button> </Link>
        </div>
      </div>
  </header>
            </div>
            
              <div className='row '>
                <div className='col-md-3'></div>
                  <div className='col-lg-6 content'>
                  <h1>PIZZA HUT</h1>
                  <h2>Order your Pizza, Get it right Now </h2>
                  <button className='btn btn-warning'>Order Now</button>
                  </div>
                  <div className='col-md-3'></div>
             
              </div>
          
          
          
          
           </div>
       </div>
              
       </div>
    )
}

export default Home
