import React from "react";

const CustomSwitch = () => {
  return (
    <div className="d-inline-block">
      <div
        className="d-flex justify-content-between"
        style={{ backgroundColor: "#F3F6F7", borderRadius: 16 }}
      >
        <div className="py-1 px-4 bg-danger" style={{ borderRadius: 16 }}>
          Online
        </div>
        <div className="py-1 px-4">Offline</div>
      </div>
    </div>
  );
};

export default CustomSwitch;
