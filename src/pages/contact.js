import './contact.css';
import { useState } from 'react'
import axios from 'axios'

function Contact(){


  const [status, setStatus] = useState(false);

  const [formData, setFormData] = useState({});

  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/contactForm", formData);
      console.log(response.data);
        alert("Data Saved")
      setStatus(response.data.status);
      // console.log(response.data.status)

      
    } catch (error) {
      // console.error(error.message);
      alert('Enter valid details')
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleModalClose = () => {
    setStatus(false);
  };

  
 

  return (
    <>
      <div className="row">
        <div className="container">
          <div className="col-md-12">
            <div className="contact-header">
              <p className="text-grey">
                {" "}
                <a href="#homepage" className="text-grey">
                  &lt;  Back
                </a>
              </p>
              <h3 className="contact-txt">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex con-back">
        <div className="col-md-6 p-2">
          <div className="contact-info">
            <h4>We're always here for you!</h4>
            <p>Email us, we'll be delighted to help you!</p>
            <div className="phone">
              <img src={require("../images/contact_phone.png")} alt="" />
              &nbsp;&nbsp;
              <a href="tel:+919510441661">+91 9510441661 </a>
            </div>
            <br />
            <div className="mail">
              <img src={require("../images/contact_mail.png")} alt="" />
              &nbsp;&nbsp;
              <a href="mailto:info@sanjolisarees.com">Info@sanjolisarees.com</a>
            </div>
            <br />
            <div className="address">
              <img src={require("../images/contact_addr.png")} alt="" />
              &nbsp;&nbsp;&nbsp;
              <span >
                101, first floor, Silk Heritage, Kamela Darwaja,
                <span className="mob-pad">Ring road, Surat - 395002</span>
              </span>
              <br />
              <br />
            </div>
            <div className="map">
              <br />
              <br />
              {/* <p>Get directions -</p> */}
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="map-"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=californi101, first floor, Silk Heritage, Kamela Darwaja,Ring road, Surat - 395002a&t=k&z=10&ie=UTF8&iwloc=&output=embed"
                    title="map"
                  />
                  <a href="https://2yu.co" > </a>
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:100%;width:100%;}",
                    }}
                  />
                  <a href="https://embedgooglemap.2yu.co/"> </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 ">
          <div className="contact-form">
            <form id="contact-us" method="post" action="" onSubmit={handleSubmit}>
              {/* label */}
              <h5>Let's Talk - get in touch today!</h5>
              {/* Name */}
              <label htmlFor="">
                Name <span className="text-grey">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form "
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}

              />
              {/* Conatact */}
              <label htmlFor="">
                Contact <span className="text-greyr">*</span>
              </label>
              <input
                type="tel"
                name="contactNo"
                size={10}
                id="contact-number"
                required
                className="form "
                placeholder="9832xxxxxx"
                pattern="[0-9]{10}"
                value={formData.contactNo}
                onChange={handleChange}

              />
              {/* Email */}
              <label htmlFor="">
                Email <span className="text-grey">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="mail"
                required
                className="form "
                placeholder="abc@domain.com"
                value={formData.email}
                onChange={handleChange}

              />

              {/* subject */}
              <label htmlFor="">
                Subject 
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form "
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}

              />
              
              {/* Message */}
              <label htmlFor="">
                Message 
              </label>
              <textarea
                name="message"
                id="message"
                className="form textarea"
                
                placeholder="Write your message here. We can't wait to here you."
                defaultValue={""}
                value={formData.message}
                onChange={handleChange}

              />
              {/* Bottom Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="send-btn text-center"
                  style={{ margin: "0rem 0r9m" }}
                >
                  Send
                </button>
              </div>
            </form>

            {/* msg pop up */}

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;