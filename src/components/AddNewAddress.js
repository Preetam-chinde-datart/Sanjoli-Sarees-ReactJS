import { useState } from 'react';
import './AddNewAddress.css'
import axios from 'axios';

export function AddNewAddress(){


    // addAddress
    const [newAddress, setNewAddress] = useState({})

    const formChange = (e) => {
        setNewAddress({ ...newAddress, [e.target.name] : e.target.value });
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/updateUser", newAddress);
            console.log(response.data);
            // alert("Address added successfully")
            console.log(response.data.status)
        } catch (error) {
            console.error(error.message);
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

    return(
        <>
            <h4>Add new address</h4>
            <p>Please fill in your billing details where you want the order to be delivered.</p>
            <div className="address-form mt-4">
                <form onSubmit={formSubmit}>
                    <input type="text" onChange={formChange} placeholder='First Name' name='firstName' className='formStyle half-width'/>
                    <input type="text" onChange={formChange} placeholder='Last Name' name='lastName' className='mb-4 formStyle half-width'/>
                    <input type="tel" max={10} onChange={formChange} placeholder='Contact Number' name='contactNumber' className='mb-4 formStyle half-width'/><br />
                    <input type="text" onChange={formChange} placeholder='Country/Region' name='country' className='mb-4 formStyle half-width'/><br />
                    {/* state dropdown */}
                    <select id="state-select" className="state mb-4 formStyle half-width" onChange={(e)=>{handleChange(e.target.value);}} placeholder="State">
                    <option value="">State</option>
                    {
                        states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))
                    }
                    </select>
                    <input type="text" onChange={formChange} placeholder='Town/City' name='city' className='formStyle half-width'/>
                    <input type="text" onChange={formChange} placeholder='Street address' name='street' className='mb-4 formStyle fullWidth' />
                    <input type="text" onChange={formChange} placeholder='Landmark' name='landmark' className='formStyle half-width'/>
                    <input type="tel" onChange={formChange} placeholder='Pincode' name='pincode' className='mb-4 formStyle half-width'/>
                    <input type="text" onChange={formChange} placeholder='Additional Comments' name='comment' className='mb-4 formStyle fullWidth' />
                    <button type='submit' className='submit ms-3 my-2' >Submit</button>
                </form>
            </div>  
            
                    
        </>
    )
}