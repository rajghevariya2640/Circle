import { Button } from 'antd'
import React from 'react'

const CButton = ({children, className, ...props}) => {
  return (
    <Button className={`${className ? className : ''}`} {...props}>
      {children}
    </Button>
  )
}

export default CButton
