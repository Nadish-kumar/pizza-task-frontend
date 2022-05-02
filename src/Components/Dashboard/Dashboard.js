import React from "react";
import "./Dashboard.css";
import Dashboardcontent from "./Dashboardcontent";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Carditems from "./Carditems";
import logo from "../../assets/img/pizza.jpg";

const Dashboard = () => {
  let handleAddToCart = (product) => {
    setcartitems([...cartitems, product]);
    settotal(total + product.price);
  };

  let handleRemoveCart = (product) => {
    settotal(total - product.price);

    let removeItem = cartitems.filter(obj => obj._id !== product._id);
    setcartitems([...removeItem])
  };

  const [bread, setbread] = useState([]);
  const [cartitems, setcartitems] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(async () => {
    try {
      let breadata = await axios.get(
        "https://pizzatask-hackathon.herokuapp.com/bread"
      );
      setbread(breadata.data);
    } catch (error) {
      console.log(error);
    }
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const [sauce, setsauce] = useState([]);
  useEffect(async () => {
    try {
      let saucedata = await axios.get(
        "https://pizzatask-hackathon.herokuapp.com/sauce"
      );
      setsauce(saucedata.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [cheese, setcheese] = useState([]);
  useEffect(async () => {
    try {
      let cheesedata = await axios.get(
        "https://pizzatask-hackathon.herokuapp.com/cheese"
      );
      setcheese(cheesedata.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [veg, setveg] = useState([]);
  useEffect(async () => {
    try {
      let vegdata = await axios.get(
        "https://pizzatask-hackathon.herokuapp.com/veg"
      );
      setveg(vegdata.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [meat, setmeat] = useState([]);
  useEffect(async () => {
    try {
      let meatdata = await axios.get(
        "https://pizzatask-hackathon.herokuapp.com/meat"
      );
      setmeat(meatdata.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const payAmount = () => {
    axios
      .post("https://pizzatask-hackathon.herokuapp.com/payment", {
        amount: total,
      })
      .then(async (res) => {
        if (res.data.status === "success") {
          console.log(res.data);
          const id = await res.data.sub.id;
          pay(id, total);
        } else {
        }
      })
      .catch((error) => {
        if (error.message === "Network Error") {
        }
      });
  };
  const pay = (id, amount) => {
    console.log(id, amount);
    var options = {
      key: "rzp_test_WVu8bni55PVN2d",
      currency: "INR",
      name: "Razorpay",
      description: "Food cost",
      image: { logo },
      order_id: id,
      handler: async function (response) {
        console.log(response);
        alert("Your order is Placed");

        // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        //   response;
        // await axios
        //   .post("http://localhost:3000/order/create", {
        //     razorpay_order_id: razorpay_order_id,
        //     razorpay_payment_id: razorpay_payment_id,
        //     razorpay_signature: razorpay_signature,
        //     amount: total,
        //
        //   })
        //   .then((res) => {
        //     console.log(res);
        //   });
      },
      theme: {
        color: "#227254",
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="container-fluid ">
      <div className="row words">
        <div className="col-lg-8">
        
          <div className="row words__pizza">
            <h1>Customize your Pizza</h1>
            <h2>Choose your base</h2>
            {bread.map((product) => {
              return (
                <Dashboardcontent
                  productdata={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        
        <hr></hr>
        {/* sauce display */}
        
          <div className="row ">
            <h3>Choose your Sauce</h3>
            {sauce.map((product) => {
              return (
                <Dashboardcontent
                  productdata={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        
        <hr></hr>
   
          <div className="row ">
            <h3>Choose your cheese</h3>
            {cheese.map((product) => {
              return (
                <Dashboardcontent
                  productdata={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>

        <hr></hr>
       
          <div className="row ">
            <h3>Choose your Veggies</h3>
            {veg.map((product) => {
              return (
                <Dashboardcontent
                  productdata={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
     
        <hr></hr>

          <div className="row ">
            <h3>Choose your Meat</h3>
            {meat.map((product) => {
              return (
                <Dashboardcontent
                  productdata={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        
        </div>
        <div className="col-lg-4 cartitems">
        {/* <div class=" mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
                </li>
              </ul>

              <button type="button" class="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div> */}
          {/* <div className="card">
          <h3 className="cart__text">Cart</h3>
          <Carditems cartitems={cartitems} handleRemoveCart={handleRemoveCart} />
          <div className="cart__amountsession">
            <div className="cart__refamount">Total Amount</div>
            <div className="cart__inr">INR{total}</div>
          </div>
          <button className="btn btn-success btn-lg" onClick={payAmount}>Order Now</button>
          </div> */}
          <div class="mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Cart</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <Carditems
                  cartitems={cartitems}
                  handleRemoveCart={handleRemoveCart}
                />

                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>INR{total}</strong>
                  </span>
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-primary btn-lg btn-block"
                onClick={payAmount}
              >
                Go to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
