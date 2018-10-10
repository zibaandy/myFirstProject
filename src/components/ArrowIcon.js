import React from "react";

const ArrowIcon = (props) => {
   
      return (
      
    <div
     onClick={props.onClick}
   
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0px",
        transform: "translateY(-45px)"
      }}
    >
      <div>
        <span className={props.icon} style={{fontSize:'50px'}}/>
      </div>
    </div>
  );
};
export default ArrowIcon