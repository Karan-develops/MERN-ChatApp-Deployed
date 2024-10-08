import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control mr-4">
        <label className="cursor-pointer label">
          <span className="label-text mr-2 text-blue-300">Male ♂️</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text mr-2 text-[#ffbfff]">Female ♀️</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-secondary"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
