import React from 'react'

const Image = ({imgAlt,imgSrc,className}) => {
  return (
   <img src={imgSrc} alt={imgAlt} className={`${className}`}></img>
  )
}

export default Image