import React from 'react';
import "./Lookbook.css"
import  Navbar  from "./Navebar";

function Lookbook() {
  return (
    <div>
  <div>
    <Navbar/>
  </div>
  
  <div className="lookbook-container">
    <div className="lookbook-image">
      <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_626,c_limit/90fd75ee-4ca3-44ee-a3f6-d5a09a8d88a7/nike-lookbook.jpg" alt="Lookbook Image" />
    </div>
    <div className="lookbook-content">
      <h3>Active Lifestyle</h3>
      <h3>
Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</h3>
    </div>
  </div>

  <div className="lookbook-container">
    <div className="lookbook-content">
      <h3>Go & Plays</h3>
      <h3>Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</h3>
    </div>
    <div className="lookbook-image">
      <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_626,c_limit/94a39cb7-65d5-4113-a9e9-61f1f032e9e4/nike-lookbook.jpg" alt="Lookbook Image" />
    </div>
  </div>

  <div className="lookbook-container">
    <div className="lookbook-image">
      <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_626,c_limit/93b3f19b-65ca-4655-8a71-eed2be1e774b/nike-lookbook.jpg" alt="Lookbook Image" />
    </div>
    <div className="lookbook-content">
      <h3>Fall/Winter</h3>
      <h3>Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</h3>
    </div>
  </div>
</div>

  );
}

export default Lookbook;
