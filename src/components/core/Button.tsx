import React from 'react'

interface ButtonProps {
  text: string
  className: string
}

const Button = (props: ButtonProps) => {
  return (
    <a className={props.className + " px-14 py-4 text-center text-2xl shadow-2xl text-shadow-2xs cursor-pointer transition duration-300 ease-in-out"}>{props.text}</a>
  )
}

export default Button