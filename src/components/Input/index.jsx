import React from 'react';

const Input = ({ placeholder, name, value, onChange, ...props }) => {
  return (
    <input
      className='px-2 py-2 m-2'
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
