import React from "react";

const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control mr-4">
        <label
          className={`cursor-pointer label ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text mr-2 text-blue-300">Male ♂️</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`cursor-pointer label ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text mr-2 text-[#ffbfff]">Female ♀️</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
