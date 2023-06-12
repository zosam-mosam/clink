import React from 'react';
import '../styles/Button.scss';

const Button = ({
  type = 'button',
  className,
  width,
  height,
  margin,
  padding,
  onClick,
  children,
  backgroundColor,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={{ width, height, padding, margin, backgroundColor }}
    >
      {children}
    </button>
  );
};

export default Button;
