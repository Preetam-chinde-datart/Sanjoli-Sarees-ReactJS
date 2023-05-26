import { useState } from 'react';
import './AddNewAddress.css'

export function AddNewAddress(){

    // State use state 
    const [selectedState, setSelectedState] = useState('');
    
    const states = [
        'Andhra Pradesh','Arunachal Pradesh', 'Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
        'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
        'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'
    ];
    
    const handleChange = (e) => {
        setSelectedState(e.target.value);
    }

    return(
        <>
            <h4>Add new address</h4>
            <p>Please fill in your billing details where you want the order to be delivered.</p>
            <div className="address-form mt-4">
                <form>
                    <input type="text" placeholder='First Name' name='firstName' className='formStyle half-width'/>
                    <input type="text" placeholder='Last Name' name='lastName' className='mb-4 formStyle half-width'/>
                    <input type="text" placeholder='Contact Number' name='contactNumber' className='mb-4 formStyle half-width'/><br />
                    <input type="text" placeholder='Country/Region' name='country' className='mb-4 formStyle half-width'/><br />
                    <input type="text" placeholder='Town/City' name='city' className='formStyle half-width'/>
                    {/* Submit dropdown */}
                    <select id="state-select" className="state mb-4 formStyle half-width" value={selectedState} onChange={handleChange} placeholder="State">
                    <option value="">State</option>
                    {
                        states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))
                    }
                    </select>
                    <input type="text" placeholder='Street address' name='street' className='mb-4 formStyle fullWidth' />
                    <input type="text" placeholder='Landmark' name='landmark' className='formStyle half-width'/>
                    <input type="text" placeholder='Pincode' name='pincode' className='mb-4 formStyle half-width'/>
                    <input type="text" placeholder='Additional Comments' name='comment' className='mb-4 formStyle fullWidth' />
                    <button type='submit' className='submit ms-3 my-2'>Submit</button>
                </form>
            </div>  
            
                    
        </>
    )
}