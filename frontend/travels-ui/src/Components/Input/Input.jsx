import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, placeholder, id, handleChange }) => {
  return (
    <input
      className="w-full py-2 px-4 rounded-[6px] text-[1rem] text-headingColor focus:outline-none"
      type={type}
      placeholder={placeholder}
      required
      id={id}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
