import React, { useState } from "react";
import Razorpay from "razorpay";

const RazorpayPayment = () => {
  const [payment, setPayment] = useState({});
  const [rzp, setRzp] = useState(null);

  const options = {
    key: "rzp_test_9lyBKy33fwGgao ",
    amount: "1",
    currency: "INR",
    name: "My Store",
    description: "Purchase Description",
    image: "https://your-site.com/your_logo.png",
    handler: function (response) {
      setPayment(response);
    },
    prefill: {
      name: "John",
      email: "john",
      contact: "9999999999",
    },
  };

  const openRazorpayModal = () => {
    const razorpay = new Razorpay(options);
    razorpay.open();
    setRzp(razorpay);
  };

  const closeRazorpayModal = () => {
    rzp && rzp.close();
  };

  return (
    <>
      <button onClick={openRazorpayModal}>Pay with Razorpay</button>
      {payment.razorpay_payment_id && (
        <div>
          <p>Payment Successful!</p>
          <p>Payment ID: {payment.razorpay_payment_id}</p>
        </div>

      
      )}

<button>PAY</button>
    </>
  );
};

export default RazorpayPayment;
