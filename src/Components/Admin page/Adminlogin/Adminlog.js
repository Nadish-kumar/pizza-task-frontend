import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Adminlog.css'
import leftimg from '../../../assets/img/pizza.jpg'

const Adminlog = () => {
     const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password : ''
        },
        onSubmit: async (values) => {
            // alert(JSON.stringify(values, null, 2));
        try {
          let logindata = await axios.post("https://pizzatask-hackathon.herokuapp.com/login-admin",values)
           window.localStorage.setItem('mytoken',logindata.data.token)
           alert("Login successfully")
           navigate("/admin-dashboard")
        } catch (error) {
          alert("Incorrect email & password")
        }
        },
      });



    return (
        
        <div className='container'>
        <div className='row'>
          <div className='col-lg-3'></div>
           <div className='col-lg-6 mt-5'>        
          <form class="form-signin" onSubmit={formik.handleSubmit}>
        <div class="text-center mb-4">
          <img class="mb-4" src={leftimg} alt="" width="72" height="72"/>
          <h1 class="h3 mb-3 font-weight-normal">Admin Profile</h1>
          <p>Build user own shop .Make Mangement system and access to server the pizza to the customers</p>
        </div>
  
        <div class="form-label-group mb-3">
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""    name="email"
           onChange={formik.handleChange}
           value={formik.values.email} />
          {/* <label for="inputEmail">Email address</label> */}
        </div>
  
        <div class="form-label-group">
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""    name="password"
           onChange={formik.handleChange}
           value={formik.values.password} />
          {/* <label for="inputPassword">Password</label> */}
        </div>
  
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <div class="checkbox mb-3">
          <label>
          <Link to="/passwordupdateadd">Forgot password</Link> 
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted text-center">?? 2022-2023</p>
      </form>
      </div> 
      <div className='col-lg-3'></div>
  
      </div>
      </div>
 
    )
}

export default Adminlog
