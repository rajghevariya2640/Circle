import { Typography } from 'antd'
import React from 'react'

const CTypographyTxet = ({children, className, ...props}) => {
  return (
    <Typography.Text className={`${className ? className : ''}`} {...props}>
        {children}
    </Typography.Text>
  )
}

export default CTypographyTxet
