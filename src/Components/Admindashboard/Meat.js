import React from 'react'
import { useFormik } from 'formik';
import './Admindashboard.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Meat = () => {

    const formik = useFormik({
        initialValues: {
           name:'',
           des:'',
           price:'',
           url:''
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://pizzatask-hackathon.herokuapp.com/meat',values)
              alert('item is posts')
               } catch (error) {
                   console.log(error);
               }
        //   alert(JSON.stringify(values, null, 2));
        },
      });



    return (
        <div className='container mt-5'>
        <h1>Meat</h1>
   
     <div className='row'>
     <div class="nav-scroller bg-body shadow-sm mt-5">
          <nav class="nav nav-underline" aria-label="Secondary navigation">
          <Link to ='/admin-dashboard'><button class="btn btn-outline-warning " aria-current="page">Base Material</button></Link>
           <Link to='/admin-dashboard/sauce'><button class="btn btn-outline-warning" aria-current="page">Sauce</button></Link>
            <Link to='/admin-dashboard/cheese'><button class="btn btn-outline-warning" aria-current="page">Cheese</button></Link>
           <Link to='/admin-dashboard/veggies'><button class="btn btn-outline-warning" aria-current="page">Veggies</button></Link>
            <Link to='/admin-dashboard/meat'><button class="btn btn-outline-warning" aria-current="page">Meat</button></Link>
            
          </nav>
        </div>
     </div>
    
         
            <form  onSubmit={formik.handleSubmit}>
            <div className='row mt-5'>
                <div className='col-lg-6'>
                    <label>Name</label>
                    <input type='text' className='form-control'    name="name"
                     onChange={formik.handleChange}
                     value={formik.values.name}></input>
                </div>
                <div className='col-lg-6'>
                    <label>Small description</label>
                    <input type='text' className='form-control'    name="des"
                     onChange={formik.handleChange}
                     value={formik.values.des}></input>
                </div>
                <div className='col-lg-6'>
                    <label>Image Url</label>
                    <input type='text' className='form-control' name="url"
                     onChange={formik.handleChange}
                     value={formik.values.url}></input>
                </div>
                <div className='col-lg-6'>
                    <label>price</label>
                    <input type='number' className='form-control' name="price"
                     onChange={formik.handleChange}
                     value={formik.values.price}></input>
                </div>
                <div className='col-lg-3 mt-3'>
                   <input type='submit' className='btn btn-primary'></input>
                </div>
              
            </div>
            </form>
            <hr></hr>

      </div>
    )
}

export default Meat
