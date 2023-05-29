import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Slide1 from '../images/slide-1.jpg'
import Slide2 from '../images/slide-2.jpg'
import Slide3 from '../images/slide-3.jpg'
import Slide4 from '../images/slide-4.jpg'
import Slide5 from '../images/slide-5.jpg'
import Slide6 from '../images/slide-6.jpg'
import Slide7 from '../images/slide-7.jpg'

export default function Slideshow(){
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [ 
    {
      url: Slide1,
    },
    {
      url: Slide2,
    },
    {
      url: Slide3,
    },
    {
      url: Slide4,
    },
    {
      url: Slide5,
    },
    {
      url: Slide6,
    },
    {
      url: Slide7,
    },
  ];



  let width = "100%";
  // let height = "px";
  return (
    <div>
       {/* <h3>
          {" "}
          Creating the image slider using the react-simple-image-slider
       </h3> */}
       
       <SimpleImageSlider
          width={width}
          height={700}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true} 
          onStartSlide = {(index, length) => {
            setImageNum(index);
          }}
            autoPlayDelay = {3}
        />
       {/* <div style = {{ fontSize: "1.5rem" }}>
          The current image slide No is {imageNum}.
       </div> */}
    </div>
  );
}