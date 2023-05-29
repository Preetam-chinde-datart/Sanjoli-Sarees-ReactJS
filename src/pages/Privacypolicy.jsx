import React from 'react';
import { useNavigate } from "react-router-dom";
  
const Privacypolicy = () => {
  const navigate = useNavigate();
    
  return (
      <>
      <div className="carde">
        <h1></h1>
  <div className="card-body">
    <h5 className="card-titles">Privacy Policy</h5>
    <h1></h1>
    <h6 className="card-subtitle mb-2 text-body-secondary">Last updated on 24 May 2023</h6>
    <p className="card-text">Sanjoli Sarees is dedicated to keeping your information private. We promise to only utilise the data we get about you legally. <br />

Sanjoli Sarees gathers data about you for two purposes: first, to fulfil your order, and second, to give you the finest support. Without your <br /> permission, we won't send you any emails in the future. Any future marketing emails from us or another trader will give you the option to opt <br /> out, and we'll never compile sensitive data about you without your express permission. <br />

We guarantee that the data we store is current and correct. By emailing us, you can request a copy of the information we currently have on <br /> you. If you see any errors, we'll delete or fix them right away. <br />

In compliance with our internal security policy and the law, we shall maintain the privacy of the personal information we have in a safe <br /> manner. <br />

By accepting the Privacy Policy, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy <br /> Policy. This Privacy Policy is incorporated into and subject to the terms of the User Agreement. This Privacy Policy is effective upon <br /> acceptance in registration and/or by access by you to the Site. <br />

Company reserves the right to update or modify this Privacy Policy at any time. Any change to this Privacy  Policy shall be deemed to be <br /> effective as soon as such change reflects on [https://www.sanjolisarees.com/pages/privacy-policy]. As a user of the Website and/or Services, <br /> you are advised to check this Privacy Policy periodically to keep yourself updated on any changes. You hereby acknowledge that any <br /> collection, storage, processing or other use of your Information shall be governed by the Privacy Policy as applicable at the time of such <br /> collection, storage, processing or other use.</p>

 
   
   
</div>


</div>
{/*         
        <button onClick={()=>navigate("/about")}>Privacypolicy</button> */}
      </>
  )
};
  
export default Privacypolicy;