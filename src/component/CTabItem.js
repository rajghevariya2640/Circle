import { Tabs } from 'antd'
import React from 'react'

const CTabItem = ({children, className, ...props}) => {
  return (
    <Tabs.TabPane className={`${className ? className : ''}`} {...props}>
        {children}
    </Tabs.TabPane>
  )
}

export default CTabItem
