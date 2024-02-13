import { Menu } from 'antd'
import React from 'react'

const CMenu = ({children, classNAme, ...props   }) => {
  return (
    <Menu className={`${classNAme ? classNAme : ''}`} {...props}>
        {children}
    </Menu>
  )
}

export default CMenu
