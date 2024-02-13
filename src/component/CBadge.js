import { Badge } from 'antd'
import React from 'react'

const CBadge = ({children, className, ...props}) => {
  return (
    <Badge className={`badge ${className ? className : ''}`} {...props}>
          {children}
    </Badge>
  )
}

export default CBadge
