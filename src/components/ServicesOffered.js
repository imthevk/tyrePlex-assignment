import React from "react";
import "./ServicesOffered.css";
function ServicesOffered() {
  return (
    <div className="container">
      <div className="serviceOffered">
        <h5>Services offered by this dealer</h5>
        <div className="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="serviceItem">
              <div className="serviceItemChild">
                <img
                  src="/images/wheel-alignment-bal.png"
                  alt="wheel-alignment-bal"
                />
                <h6 className="py-2">Wheel Balancing</h6>
                <button className="bookBtn">Book Now</button>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="serviceItem">
              <div className="serviceItemChild">
                <img src="/images/wheel-alignment.png" alt="wheel-alignment" />
                <h6 className="py-2">Wheel Alignment</h6>
                <button className="bookBtn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServicesOffered;
