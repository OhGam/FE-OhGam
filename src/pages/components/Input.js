import React from "react";
import PropTypes from "prop-types";

export default function Input({ inputText, setInputText, placeholder, label }) {
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <p className="text-xs">{label}</p>
      <input
        className="mb-3 mt-1 w-full border py-1.5 pl-2 pr-10 placeholder:text-xs"
        type="text"
        value={inputText}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}

Input.propTypes = {
  inputText: PropTypes.string,
  setInputText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};
