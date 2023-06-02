import React from 'react';
import axios from "axios";
import './checkout.css'
// import ShowModal from '../components/OrderModal';
import { confirmAlert } from 'react-confirm-alert'; 
import { useState } from 'react'
// import 'react-confirm-alert/src/react-confirm-alert.css'; 


const submitOrder = () =>{

  
    
    confirmAlert({
          title: '',
          message: 'Do You Want To Continue With Cash on Delivery ?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                

               

                alert("Order Placed Sucessfully !!")

               
               

            // const createOrder=()=>{}
                //create order
              }
            //   alert('Click Yes')
            },
            {
              label: 'No',
              onClick: () => {
                

              }
           
            }
          ]
        });
      };
    
class Payment extends React.Component {
   
  constructor(props){
    super(props);
    this.state={
      modalIsOpen: false,
      amount:0
    }
    this.handleChange = this.handleChange.bind(this);
    this.openPayModal = this.openPayModal.bind(this);
    
}
componentDidMount () {
    const script = document.createElement("script");
script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
document.body.appendChild(script);
}
handleChange(evt){
    console.log(evt.target.value)
    this.setState({
      amount:evt.target.value
    })
  }
// openPayModal(amt){
    openPayModal(){
    // let amt=10;

    // Collect data from URL 
    const paramValues = window.location.search;
    const urlParams = new URLSearchParams(paramValues);

    const finalPrice = urlParams.get('orderValue')
    var amount = finalPrice * 100; //Razorpay consider the amount in paise
    var options = {
      "key": process.env.rzp_test_r1P5cUMeScdqJD,
      "amount": amount, // 2000 paise = INR 20, amount in paisa
      "name": "",
      "description": "",
      'order_id':"",
      "handler": function(response) {
          console.log(response); 

          var values ={
              razorpay_signature : response.razorpay_signature,
              razorpay_order_id : response.razorpay_order_id,
              transactionid : response.razorpay_payment_id,
              transactionamount : amount/100,
            }
            // var newloc = "";
            // window.location.href = newloc;
            // const url = process.env.REACT_APP_TEST_LINK;  
            //   const token = localStorage.getItem('token');
            //   const userId = localStorage.getItem('userId');
              

            // const authAxios = axios.create({
            //   baseURL : url,
            //   headers : {
            //     'auth-jwt' : token,
            //   },
            // })
          
         
            axios.post('https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/payment',values)
          .then(res=>{

           //alert("Success")
            // console.log("something");
            console.log(res.data);
            const [formData, setFormData] = useState({
              firstName: '',
              lastName: '',
              mobileNo:'',
              email: '',
              password: '',
            });
          
            // const navigate = useNavigate();
            
          
            const handleSubmit = async (event) => {
              event.preventDefault();
              try {
                const response = await axios.post("", formData);
                console.log(response.data);
               
                console.log("madal1");
              
                console.log("m2");
          
                
          
                
              } catch (error) {
               
                console.log(error.response.data.msg);
                  // setErrorMessage(error.response.data.message);
              }
            };
            alert("Order Placed Sucessfully !!")
            Window.location.href='/';
           
            // <ShowModal></ShowModal>
            //create order 

           

        })
          .catch(e=>console.log(e))
      },
      "prefill":{
          "name":{},
          "email":{},
          "contact":{},
      },
      
     
      "theme": {
        "color": "#528ff0"
      }
    };
    axios.post('https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/razerOrder',{amount:amount})
    .then(res=>{
        options.order_id = res.data.id;
        options.amount = res.data.amount;
        console.log(options)
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    })
    .catch(e=>console.log(e))
    
};

 
    render(){
    return (
<>

<section id="progress-bar">
        <br /> <br />
        <div className="container d-flex">
          <div className="col-md-4">
            <img src={require("../images/check.png")} alt="" />
            <img
              src={require("../images/blue-line.png")}
              alt=""
              className="blue-line"
            />
            <p className="step"> Step 1</p>
            <h6 className="header2">Billing Details</h6>
            <p className="progress2">In Progress</p>
          </div>
          <div className="col-md-4">
            <img src={require("../images/card1.png")} alt="" />
            <img
              src={require("../images/grey-line.png")}
              alt=""
              className="grey-line"
            />
            <p className="step">Step 2</p>
            <h6 className="header2">Select Payment method</h6>
            <p className="progress3">Pending</p>
          </div>
          <div className="col-md-4">
            <img src={require("../images/card1.png")} alt="" />
            <img
              src={require("../images/grey-line.png")}
              alt=""
              className="grey-line"
            />
            <p className="step">Step 3</p>
            <h6 className="header2">Payment Details</h6>
            <p className="progress3">Pending</p>
          </div>
        </div>
      </section>

      <section>
       {/* Page Heading  */}
       <div className='container mt-3'>
                    <a href='/' className='backlink'>&lt; Back</a>
                    <div className='page-heading mb-3 pb-3'>
                        <h2>Checkout</h2>
                    </div>
                </div>
    </section>

    <section className='payment'>

        <h4>Select payment method</h4>
        <h6>Please choose a payment method you want to proceed with.</h6>
        <div className='container '>
            <button onClick={(e)=>{this.openPayModal(this.state.amount)}} className='pay-opt' >Pay Online</button>
        </div>


        <br></br>

        <div className='container'> 
            <button onClick={submitOrder} className='pay-opt'>Cash On Delivery</button>
    </div>

    
   </section>


   {/* Modal */}
   {/* {showModal &&  ( */}
     <div className="modal  show modal-sucess" tabIndex="-1" role="dialog" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
            {/* header */}
              
            </div>
            <div className="modal-body text-center md-body">
            <img src={require("../images/TIick.png")} alt="" />
            <h5 className="modal-title">Account created successfully</h5>
            {/* <FcOk></FcOk> */}
              <p>Please Log In to your account and place an order.</p>
              <button type="button" className=" modal-submit-btn" >Log In </button>
            </div>
            
          </div>
        </div>
      </div>
               {/* )} */}
    </>
  );
}
}
  

export default Payment;