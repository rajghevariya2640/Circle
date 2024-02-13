import { Tabs } from 'antd'
import React from 'react'

const CTab = ({children, className, ...props}) => {
  return (
    <Tabs className={`${className ? className : ''}`} {...props}>
      {children}
    </Tabs>
  )
}

export default CTab
