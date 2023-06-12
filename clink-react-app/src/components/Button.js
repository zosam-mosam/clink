import React from 'react';
import '../styles/Button.scss';

const Button = ({
  type = 'button',
  className,
  border,
  width,
  height,
  margin,
  opacity,
  padding,
  onClick,
  background,
  backgroundColor,
  children,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={{
        width,
        height,
        padding,
        margin,
        opacity,
        background,
        backgroundColor,
        border,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
