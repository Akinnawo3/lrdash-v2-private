import React from "react";

const CustomSwitch = ({ options, active, onChange }) => {
  return (
    <div className="d-inline-block ">
      <div
        className="d-flex justify-content-between py-1"
        style={{ backgroundColor: "#F3F6F7", borderRadius: 19 }}
      >
        {options.map((item) => (
          <div
            key="item"
            className={`py-2 px-4 ${
              active === item && " gradient-btn text-white"
            }`}
            style={{ borderRadius: 19 }}
            onClick={() => onChange(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSwitch;
