// import React from "react";

// eslint-disable-next-line react/prop-types
export default function Buttons({ text, onClick }) {
  return (
    <div className="flex flex-col">
      <button
        className="mb-2 rounded-full border py-1.5"
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
