import React from "react";
import "./Plans.css";

function Plans() {
  return (
    <div>
      <div className="plan">
        <div className="plan__info">
          <h5>Premium</h5>
          <h6>4K + HDK</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plan">
        <div className="plan__info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plan">
        <div className="plan__info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Plans;
