import { Space } from 'antd'
import React from 'react'

const CSpace = ({children, className, direction, size,width, ...props}) => {
    return (
        <Space className={className} size={size || 'unset'} style={{width: `${width ? width : "100%"}`}} direction={`${direction ? direction : 'vertical'}`} {...props}>
            {children}
        </Space>
    )
}

export default CSpace
