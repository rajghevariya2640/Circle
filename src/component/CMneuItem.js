import { Menu } from 'antd'
import React from 'react'

const CMneuItem = ({children, className, ...props}) => {
  return (
    <Menu.Item className={`${className ? className : ''}`} {...props}>
      {children}
    </Menu.Item>
  )
}

export default CMneuItem
