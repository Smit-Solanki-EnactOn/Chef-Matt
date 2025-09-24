import React from 'react'

interface ButtonProps {
  children: string;
  style: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
}
// declaring the types of the button that we are going to use
export type ButtonType = "button" | "submit" | "reset" | "link";

const ButtonSize = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const baseStyle = "text-center cursor-pointer transition smooth-transition";

const Button = (props: ButtonProps) => {
  const { children, style, size = 'md', type = 'button' } = props;
  const sizeClass = ButtonSize[size] || ButtonSize.md;

  return (
    <button
      type={type}
      className={`${baseStyle} ${sizeClass} ${style}`}
    >
      {children}
    </button>
  )
}

export default Button