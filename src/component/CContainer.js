import React from 'react'

const CContainer = ({children, className, ...props}) => {
  return (
    <div className={` container ${className ? className : ''}`} {...props}>
      {children}
    </div>
  )
}

export default CContainer
