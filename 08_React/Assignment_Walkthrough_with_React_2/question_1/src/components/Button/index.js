import React from "react";

const Button = ({ label = "", className = "", icon = null }) => {
  return (
    <button className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center ${className}`}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
