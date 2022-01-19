import React from 'react'
import './Dashboard.css'
import Dashboardcontent from './Dashboardcontent'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Carditems from './Carditems'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    let handleAddToCart = (product) => {
      setcartitems([...cartitems,product])
      settotal(total + product.price)
    }

    let handleRemoveCart = (product) => {
        let index = cartitems.findindex(obj => obj.id == product.id);
        let removedata = cartitems.splice(index,1)
        setcartitems([...removedata])
    }
    const [bread, setbread] = useState([])
    const [cartitems, setcartitems] = useState([])
     const [total, settotal] = useState(0)

   useEffect( async() => {
           try {
            let breadata = await axios.get("http://localhost:8001/bread");
            setbread(breadata.data) 
           } catch (error) {
               console.log(error)
           }
      }, [])

      const [sauce, setsauce] = useState([])
      useEffect( async() => {
        try {
         let saucedata = await axios.get("http://localhost:8001/sauce");
         setsauce(saucedata.data) 
        } catch (error) {
            console.log(error)
        }
   }, [])

   const [cheese, setcheese] = useState([])
   useEffect( async() => {
    try {
     let cheesedata = await axios.get("http://localhost:8001/cheese");
     setcheese(cheesedata.data) 
    } catch (error) {
        console.log(error)
    }
}, [])

 const [veg, setveg] = useState([])
 useEffect( async() => {
    try {
     let vegdata = await axios.get("http://localhost:8001/veg");
     setveg(vegdata.data) 
    } catch (error) {
        console.log(error)
    }
}, [])

const [meat, setmeat] = useState([])
useEffect( async() => {
    try {
     let meatdata = await axios.get("http://localhost:8001/meat");
     setmeat(meatdata.data) 
    } catch (error) {
        console.log(error)
    }
}, [])

    return (
        <div className='container-fluid '>
            <div className='row words'>
                <div className='col-lg-8'>
                    <div className='row '>
                        <h1>customize your Pizza</h1>
                        <h3>Choose your base</h3>
                        {
                            bread.map((product) => {
                                return <Dashboardcontent productdata ={product} handleAddToCart = {handleAddToCart} />
                            })
                        }
                   
            
                  
                    </div>
                </div>
                <hr></hr>
                {/* sauce display */} 
                 <div className='col-lg-8 '>
                    <div className='row '>
                     
                        <h3>Choose your Sauce</h3>
                        {
                            sauce.map((product) => {
                                return <Dashboardcontent productdata ={product} handleAddToCart = {handleAddToCart} />
                            })
                        }
                   
            
                  
                    </div>
                </div>
                <hr></hr>
                <div className='col-lg-8 '>
                    <div className='row '>
                     
                        <h3>Choose your cheese</h3>
                        {
                            cheese.map((product) => {
                                return <Dashboardcontent productdata ={product} handleAddToCart = {handleAddToCart} />
                            })
                        }
                   
            
                  
                    </div>
                </div>
                <hr></hr>
                <div className='col-lg-8 '>
                    <div className='row '>
                     
                        <h3>Choose your Veggies</h3>
                        {
                            veg.map((product) => {
                                return <Dashboardcontent productdata ={product} handleAddToCart = {handleAddToCart} />
                            })
                        }
                   
            
                  
                    </div>
                </div>
                <hr></hr>
                <div className='col-lg-8 '>
                    <div className='row '>
                     
                        <h3>Choose your Meat</h3>
                        {
                            meat.map((product) => {
                                return <Dashboardcontent productdata ={product} handleAddToCart = {handleAddToCart} />
                            })
                        }
                   
            
                  
                    </div>
                </div>

                <div className='col-lg-4 cartitems'>
               
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Cart</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">

             <Carditems cartitems={cartitems} handleRemoveCart={handleRemoveCart}/>
         
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>${total}</strong></span>
              </li>
            </ul>

            <Link to='/dashboard/payment-gateway'><button type="button" class="btn btn-primary btn-lg btn-block">Go to Payment </button></Link>
          </div>
        </div>
        </div>
                </div>
            </div>
    

    )
}

export default Dashboard
