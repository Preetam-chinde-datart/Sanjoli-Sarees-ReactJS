import './checkout.css'
// import './bag.css'
import 'bootstrap'
import { useState } from 'react'
import axios from 'axios';
// import Payment from './checkout2';
function Checkout () {

  // Collect data from URL 
  const paramValues = window.location.search;
  const urlParams = new URLSearchParams(paramValues);

  const finalPrice = urlParams.get('valueRef')
 
  // const [isChecked, setIsChecked] = useState(false);
  const [shippingform,setshippingform]= useState (false);

  const showform=()=>{
    setshippingform(!shippingform)
    
  }
 
  // const [check, setCheck] = useState (false)
  const [billingAddress, setBillingAddress] = useState({})
  const [shippingAddress, setShippingAddress] = useState({})
  const [sameAsBilling, setSameAsBilling] = useState(false);

  
  const handleBillingChange = (event) => {
    const { name, value } = event.target;
    setBillingAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleShippingChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  
  const handleCheckboxChange = () => {
    setSameAsBilling(!sameAsBilling);
    if (!sameAsBilling) {
      setShippingAddress(billingAddress);
    } else {
      setShippingAddress({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      });
    }
  };



  const formChange = (e) => {
      setBillingAddress({ ...billingAddress, [e.target.name] : e.target.value });
  }
  const url = process.env.REACT_APP_TEST_LINK;  
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  
  const authAxios = axios.create({
    baseURL : url,
    headers : {
      'auth-jwt' : token,
    },
  })


  const formSubmit = async (e) => {
      // e.preventDefault();
      try {
          const response = await authAxios.put(`/updateAddress/${userId}`,{address: {billingAddress:{billingAddress }}});
          console.log(response.data);
          console.log("Billing");
          // alert("Address added successfully")
          console.log(response.data.status)
      } catch (error) {
          console.log(error);
          // alert('Enter valid details')
      }
      
      try{
      const response = await authAxios.put(`/updateAddress/${userId}`,{address: {shippingAddress:{ shippingAddress}}} );
      console.log(response.data);
      console.log("Shipping");
      // alert("Address added successfully")
      console.log(response.data.status)
      // window.location.href='Payment'
      } 
      catch (error) {
          console.log(error);
          // alert('Enter valid details')
      }
  };

  // State use state 
  const [selectedState, setSelectedState] = useState('');
  
  const states = [
      'Andhra Pradesh','Arunachal Pradesh', 'Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
      'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
      'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'
  ];
  
  const handleChange = (e) => {
      // setSelectedState(e.value);
      console.log(e);
  } 
  


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
            <p className="step"> </p>
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
            <p className="step">Step 3</p>
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

     
    <div className="container d-flex mt-5">
        <div className="col-md-9 billing-address">
              <section className='billing'>
              <h4>Add billing address</h4>
            <p>Please fill in your billing details where you want the order to be delivered.</p>
            <div className="checkoutadd-form mt-4">
                <form onSubmit={formSubmit}>
                    <input type="text"  value={billingAddress.firstName} onChange={handleBillingChange} placeholder='First Name' name='firstName' className='formStyle half-width'/>
                    <input type="text"  value={billingAddress.lastName} onChange={handleBillingChange} placeholder='Last Name' name='lastName' className='mb-4 formStyle half-width'/>
                    <input type="tel" max={10}  value={billingAddress.contactNumber} onChange={handleBillingChange} placeholder='Contact Number' name='contactNumber' className='mb-4 formStyle half-width'/><br />
                    <input type="text" value={billingAddress.country} onChange={handleBillingChange}placeholder='Country/Region' name='country' className='mb-4 formStyle half-width'/><br />
                    {/* state dropdown */}
                    <select id="state-select" className="state mb-4 formStyle half-width" value={billingAddress.state} onChange={handleBillingChange} placeholder="State">
                    <option value="">State</option>
                    {
                        states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))
                    }
                    </select>
                    <input type="text" value={billingAddress.city} onChange={handleBillingChange} placeholder='Town/City' name='city' className='formStyle half-width'/>
                    <input type="text" value={billingAddress.street} onChange={handleBillingChange} placeholder='Street address' name='street' className='mb-4 formStyle fullWidth' />
                    <input type="text"value={billingAddress.landmark} onChange={handleBillingChange} placeholder='Landmark' name='landmark' className='formStyle half-width'/>
                    <input type="tel"value={billingAddress.pincode} onChange={handleBillingChange} placeholder='Pincode' name='pincode' className='mb-4 formStyle half-width'/>
                    <input type="text"value={billingAddress.comment} onChange={handleBillingChange} placeholder='Additional Comments' name='comment' className='mb-4 formStyle fullWidth' />
                    </form>
                    </div>
                    <div className='shipping-link'>
                      <button onClick={showform} className='text-decoration-underline' >Shipping Address</button>
                    </div>
                 
              </section>

              
                
                 {shippingform && (
                  <section id="Shipping">

                <div className='check'>
                <input 
                        type="checkbox"
                        onChange={handleCheckboxChange}
                      checked={sameAsBilling}
                         /> <label htmlFor='checkbox' className=''>Shipping  Address Is Same As Billing Address</label>
                        
                 </div>
                  <h4>Add Shipping address</h4>
            {/* <p>Please fill in your billing details where you want the order to be delivered.</p> */}
            {sameAsBilling ?
            <div className="checkoutadd-form mt-4">
         
            <form onSubmit={formSubmit}>
                <input type="text"  value={sameAsBilling ? `${billingAddress.firstName}` : ''}  placeholder='First Name' name='firstName' className='formStyle half-width'/>
                <input type="text" value={sameAsBilling ? `${billingAddress.lastName}` : ''}  placeholder='Last Name' name='lastName' className='mb-4 formStyle half-width'/>
                <input type="tel" max={10}  value={sameAsBilling ? `${billingAddress.contactNumber}` : ''} placeholder='Contact Number' name='contactNumber' className='mb-4 formStyle half-width'/><br />
                <input type="text" value={sameAsBilling ? `${billingAddress.country}` : ''}  placeholder='Country/Region' name='country' className='mb-4 formStyle half-width'/><br />
                {/* state dropdown */}
                <select id="state-select" className="state mb-4 formStyle half-width" value={sameAsBilling ? `${billingAddress.state}` : ''} placeholder="State">
                <option value="">State</option>
                {
                    states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))
                }
                </select>
                <input type="text" value={sameAsBilling ? `${billingAddress.city}` : ''} placeholder='Town/City' name='city' className='formStyle half-width'/>
                <input type="text" value={sameAsBilling ? `${billingAddress.street}` : ''} placeholder='Street address' name='street' className='mb-4 formStyle fullWidth' />
                <input type="text" value={sameAsBilling ? `${billingAddress.landmark}` : ''} placeholder='Landmark' name='landmark' className='formStyle half-width'/>
                <input type="tel" value={sameAsBilling ? `${billingAddress.pincode}` : ''} placeholder='Pincode' name='pincode' className='mb-4 formStyle half-width'/>
                <input type="text" value={sameAsBilling ? `${billingAddress.comment}` : ''} placeholder='Additional Comments' name='comment' className='mb-4 formStyle fullWidth' />
                {/* <button type='submit' className='submit ms-3 my-2' >Submit</button> */}
            </form>
      
        </div> 

        :

        <div className="checkoutadd-form mt-4">
         
                <form onSubmit={formSubmit}>
                    <input type="text"    value={shippingAddress.firstName} onChange={(e)=>{handleShippingChange(e);}}   placeholder='First Name' name='firstName' className='formStyle half-width'/>
                    <input type="text"   value={shippingAddress.lastName} onChange={(e)=>{handleShippingChange(e);}}   placeholder='Last Name' name='lastName' className='mb-4 formStyle half-width'/>
                    <input type="tel" max={10}   value={shippingAddress.contactNumber} onChange={(e)=>{handleShippingChange(e);}}  placeholder='Contact Number' name='contactNumber' className='mb-4 formStyle half-width'/><br />
                    <input type="text"   value={shippingAddress.country} onChange={(e)=>{handleShippingChange(e);}}   placeholder='Country/Region' name='country' className='mb-4 formStyle half-width'/><br />
                    {/* state dropdown */}
                    <select id="state-select" className="state mb-4 formStyle half-width"  value={shippingAddress.state} onChange={(e)=>{handleShippingChange(e);}}  placeholder="State">
                    <option value="">State</option>
                    {
                        states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))
                    }
                    </select>
                    <input type="text"   value={shippingAddress.city} onChange={(e)=>{handleShippingChange(e);}}  placeholder='Town/City' name='city' className='formStyle half-width'/>
                    <input type="text"   value={shippingAddress.street} onChange={(e)=>{handleShippingChange(e);}}  placeholder='Street address' name='street' className='mb-4 formStyle fullWidth' />
                    <input type="text"   value={shippingAddress.landmark} onChange={(e)=>{handleShippingChange(e);}}  placeholder='Landmark' name='landmark' className='formStyle half-width'/>
                    <input type="tel"  value={shippingAddress.pincode} onChange={(e)=>{handleShippingChange(e);}}  placeholder='Pincode' name='pincode' className='mb-4 formStyle half-width'/>
                    <input type="text"   value={shippingAddress.comment} onChange={(e)=>{handleShippingChange(e);}}  placeholder='Additional Comments' name='comment' className='mb-4 formStyle fullWidth' />
                    {/* <button type='submit' className='submit ms-3 my-2' >Submit</button> */}
                </form>
          
            </div> 

            }
            
       
             </section>
                     )} 

      </div>
         
           <div className="col-md-3 order">
           <section id="order">
           <div className="summary p-3">
                                <h3 className='mb-5'>Summary</h3>
                                <div className="sub-total d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p className='sub-total'>₹{finalPrice - 270}</p>
                                </div>
                                <div className="shipping d-flex justify-content-between">
                                    <p>Shipping</p>
                                    <p className='shipping'>₹120</p>
                                </div>
                                <div className="tax d-flex justify-content-between">
                                    <p>Tax</p>
                                    <p className='tax'>₹150</p>
                                </div>
                                <div className="final-bill">
                                    <div className="final-total d-flex justify-content-between">
                                        <h5 className='fw-bold'>Total</h5>
                                        <h5 className='fw-bold final-total'>₹{finalPrice}</h5>
                                    </div>
                              <button className=" checkout-btn " onClick={formSubmit}>Checkout</button>
                                </div>
                            </div>
           
              </section>

          </div>
         
      </div>
    </>
  );
}
export  default Checkout;