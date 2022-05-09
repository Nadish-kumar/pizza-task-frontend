import React from 'react'
import './Adminreg.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import record from "../../../assets/img/pizza 2.jpg"

const Adminreg = () => {
 
    const nagivate = useNavigate ();
     
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          phone : ''
        
        },
        onSubmit: async (values) => {
              //  alert(JSON.stringify(values, null, 2));
           try {
            await axios.post('https://pizzatask-hackathon.herokuapp.com/register-admin',values)
            alert("registration is completed successfully")
            nagivate('/admin-dashboard')
           } catch (error) {
               console.log(error);
           }
        },
      });



    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img className="gmail1" src={record} />
        </div>
        <div className="col-md-6">
          {/* <img className="gamil2" src={} /> */}
          <p className="heading">Admin Register</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <input
                  type="text"
                  placeholder="Enter your first Name"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                />
               
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
                <input
                  type="number"
                  placeholder="Enter your Number"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  name="phone"
                />
               
                <div className="buttongro1">
                  <button className="btn btn-primary button" type="submit">
                    Register
                  </button>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div> 
    )
}

export default Adminreg
