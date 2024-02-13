import { Typography } from 'antd'
import React from 'react'
import CBadge from './CBadge'
import CSpace from './CSpace'

const CHead = ({heading, className, badge, align, boxShadow}) => {
  return (
    <CSpace size={10} align={align} className={`${className ? className : ''}`}>
      {badge && (
       <CBadge count={badge} sx={{boxShadow: `${boxShadow === true ? '2px 2px 5px rgba(0,0,0,0.2)' : ''}`}} />
       )}
      <Typography.Title level={3} className='heading'>
        {heading}
      </Typography.Title>
    </CSpace>
  )
}

export default CHead
