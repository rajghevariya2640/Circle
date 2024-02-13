import Link from 'antd/es/typography/Link'
import React from 'react'

const CLink = ({children, className, ...props}) => {
  return (
    <Link className={`${className ? className : ''}`} {...props}>
        {children}
    </Link>
  )
}

export default CLink
