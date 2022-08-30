import "./driver.css";
import React from "react";

function Driver(props) {
  const [showInfo, setShowInfo] = React.useState(false);

  function displayMoreInfo() {
    setShowInfo(true);
  }
  function hideMoreInfo() {
    setShowInfo(false);
  }
  const displayInfo = Object.keys(props.driver).map((title, index) => {
    return (
      <p>
        {title}: {props.driver[title]}
      </p>
    );
  });

  return (
    <div className="driver">
      <img src={props.image} alt="" />
      {showInfo ? (
        <div className="driver__full_information">
          {displayInfo}
          <button onClick={hideMoreInfo}>Hide information</button>
        </div>
      ) : (
        <div className="driver__intro">
          <h3>{props.driver["Name"]}</h3>
          <button onClick={displayMoreInfo}>More information</button>
        </div>
      )}
    </div>
  );
}

export default Driver;
