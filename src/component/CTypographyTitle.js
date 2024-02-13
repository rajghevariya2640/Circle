import { Typography } from 'antd'
import React from 'react'

const CTypographyTitle = ({children, className, ...rest}) => {
  return (
    <Typography.Title className={`${className ? className : ''}`} {...rest}>
        {children}
    </Typography.Title>
  )
}

export default CTypographyTitle
