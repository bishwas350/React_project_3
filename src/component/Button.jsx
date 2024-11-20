import React from 'react'

const Button = ({bText,className}) => {
  return (
    <button className={`${className}`}>{bText}</button>
  )
}

export default Button