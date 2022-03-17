import React from 'react';
import s from './styles.module.scss';
import cn from 'utils/cn';
const Button = ({ children, className, ...props }) => {
  return (
    <button className={cn(`px-2 py-2 m-2 cursor--pointer ${className} ${s.button}`)} {...props}>
      {children}
    </button>
  );
};

export default Button;
