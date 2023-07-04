import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Buttons({ buttons }) {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col">
      {buttons.map((button, index) => (
        <button
          className="mb-2 rounded-full border py-1.5"
          key={index}
          onClick={() => handleButtonClick(button.to)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      text: PropTypes.string,
    })
  ),
};
