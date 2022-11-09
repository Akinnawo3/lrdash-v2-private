import React from "react";

const CustomSwitch = ({ options, active, onChange }) => {
  return (
    <div className="d-inline-block">
      <div
        className="d-flex justify-content-between "
        style={{ backgroundColor: "#F3F6F7", borderRadius: 16 }}
      >
        {options.map((item) => (
          <div
            key="item"
            className={`py-1 px-4 ${
              active === item && " gradient-btn text-white"
            }`}
            style={{ borderRadius: 16 }}
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
