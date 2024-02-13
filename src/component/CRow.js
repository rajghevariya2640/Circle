import { Row } from 'antd'
import React from 'react'

const CRow = ({children, className, ...props}) => {
  return (
    <Row className={`${className ? className : ''}`} {...props}>
        {children}
    </Row>
  )
}

export default CRow
