import { Col } from 'antd'
import React from 'react'

const CCol = ({children, className, ...props}) => {
  return (
    <Col className={`${className ? className : ''}`} {...props}>
        {children}
    </Col>
  )
}

export default CCol
