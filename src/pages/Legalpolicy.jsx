import React from 'react';
import { useNavigate } from "react-router-dom";
  
const Legalpolicy = () => {
  const navigate = useNavigate();
    
  return (
      <>
          <div className="card">
  <div className="card-body">
    <h5 className="card-title">Refund and Return</h5>
  
    <p className="card-text">

  
We are committed to delighting and gratifying our clients. We firmly believe that the <br /> products we sell offers the best value for the money. Our return policy was created <br /> with the consideration of our cherished clients, and as a result, it has an easy, clear <br /> process. While we would prefer that you avoid using the policy altogether, we do <br /> recognise that there may be instances where it becomes necessary to replace or <br /> return the item. Sale items are those with a discounted price, while non-sale (fresh) <br /> products are those that are sold on regular price. <br /> <h1></h1>
<h5>Item Received in Damaged Condition / Manufacturing Defect / Wrong Item <br /> Delivered:</h5> <br />
If you received a damaged product or the incorrect item, please email us at <br /> [sanjolisarees@gmail.com] with your order number and a few images along with the <br /> package opening video of the product within 7 days of delivery. <br /> <h1></h1>
We will endeavour to replace the product as quickly as possible or refund your money <br /> if necessary. <br /> <h1></h1>
At Sanjoli, each product is quality tested, validated, and dispatched to the customer, <br /> but we understand that manual mistake might occur, so we offer an exchange or mail <br /> a replacement piece. <br /> <h1></h1>
Clearance sales Items on sale are final and cannot be replaced.
    </p>

 
   
   
</div>


</div>
        {/* <button onClick={()=>navigate("/about")}>Legalpolicy</button> */}
      </>
  )
};
  
export default Legalpolicy;