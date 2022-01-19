import React from 'react'
import './Admin.css'
import leftimg from "../../assets/img/pizza.jpg"
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className='container oot'>
            <div className='row admin__content'>
                <div className='col-lg-12'>
                    <h1>Welcome to the Pizza Hut</h1>
                    <div className='row imagecontent'>
                    <img src={leftimg}></img>
                             </div>
                    <div className='row'>
                    <div class="d-grid gap-2 col-6 mx-auto">
                       <Link to='/adminreg'><button class="btn btn-warning " type="button">Admin Sign-Up</button></Link> 
                        <Link to='/adminlogin'><button class="btn btn-warning " type="button">Admin Login</button></Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Admin
