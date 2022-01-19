import React from 'react'
import { useFormik } from 'formik';
import leftimg from '../../../assets/img/pizza.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Forgetpassadd = () => {

   
    const navigate = useNavigate();
        const formik = useFormik({
          initialValues: {
              email :"",
         password : "",
         conform :"",
          },
          onSubmit: async (values) => {

            // alert(JSON.stringify(values, null, 2));
          try {
            await axios.put("http://localhost:8001/register-admin",values)
            navigate ('/adminlogin')
          } catch (error) {
              console.log(error)
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
           <h1 class="h3 mb-3 font-weight-normal">Forgot Password</h1>
           <p>Build user own shop. Make Mangement system and access to server the pizza to the customers</p>
         </div>

         <div class="form-label-group mb-3">
           <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""    name="email"
            onChange={formik.handleChange}
            value={formik.values.email} />
           {/* <label for="inputEmail">Email address</label> */}
         </div>
   
         <div class="form-label-group mb-3">
           <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" autofocus=""    name="password"
            onChange={formik.handleChange}
            value={formik.values.password} />
           {/* <label for="inputEmail">Email address</label> */}
         </div>
   
         <div class="form-label-group">
           <input type="password" id="inputPassword" class="form-control" placeholder="Re-Enter Password" required=""    name="conform"
            onChange={formik.handleChange}
            value={formik.values.conform} />
           {/* <label for="inputPassword">Password</label> */}
         </div>
   
         
         <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>
         <p class="mt-5 mb-3 text-muted text-center">© 2022-2023</p>
       </form>
       </div>
       <div className='col-lg-3'></div>
     
            
        </div>
        </div>
   
    )
}

export default Forgetpassadd
