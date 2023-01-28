import React from "react";
import "./index.scss";
const MissionPart = () => {
  return (
    <div className="missionPart">
      <div className="main">
        <div className="part1">
          <div className="part1Txt">
            <h4>OUR MISSION</h4>
            <p>
              "We are able to handle any size load, to-and-from anywhere and
              within any service time frame has made you our best and bring to
              the table win-win..
            </p>
            <button>Learn more</button>
          </div>
          <div className="part1Img">
            <img src="src/images/adam1.webp" alt="" />
          </div>
        </div>
        <div className="part2">
          <div className="part2Img">
            <img src="src/images/adam2.webp" alt="" />
          </div>
          <div className="part2Txt">
            <h1>We give you complete control of your shipments.</h1>
            <div className="div1">
              <div className="txt">
              <h2>Logistic salution</h2>
              <h4>
                Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enetis
                commodo, neque quam pharetra dolor, nec lacinia.
              </h4>
              </div>
            </div>
            <div className="div1">
            <div className="txt">
              <h2>Logistic salution</h2>
              <h4>
                Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enetis
                commodo, neque quam pharetra dolor, nec lacinia.
              </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPart;
