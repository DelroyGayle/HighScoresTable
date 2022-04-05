import React from "react";

const SortButton = (props) => {
  return (
    <div className="container">
      <div className="child">
        {/* EG <button className="button descending-button" onClick={switchOrder}> */}
        <button className={props.buttonClass} onClick={props.switchOrder}>
          Order
        </button>
        <hr></hr>
      </div>
    </div>
  );
};

export default SortButton;
