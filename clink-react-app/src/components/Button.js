import React from 'react';
import '../styles/Button.scss';

const Button = ({
  type = 'button',
  className,
  width,
  height,
  margin,
  opacity,
  padding,
  onClick,
  background,
  backgroundColor,
  color,
  border,
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
        color
      }}
    >
      {children}
    </button>
  );
};

export default Button;
