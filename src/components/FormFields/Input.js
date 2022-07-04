import React, { useState } from "react";
import PropTypes from "prop-types";

function Input({ name, className = "", label, size, style, ...rest }) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const props = {
    className: `input input-${size}`,
    style: { fontStyle: "italic", ...style },
    ...rest
  };

  return (
    <div key={`${name}`}>
      <label htmlFor={`${name}-input`}>{label}:</label>
      <input
        id={`${name}-input`}
        name={name}
        // onChange={handleChange}
        // onBlur={() => setTouched(true)}
        {...props}
      />
    </div>
  );
}

// const PropTypes = {
//     string(props, propName, componentName) {
//         if(typeof props[propName] !== 'string') {
//             return new Error(`the component ${componentName} needs the prop ${propName} to be a string, but you passed a ${typeof props[propName]}`);
//         }
//     }
// }

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default Input;
