import React from 'react'
import { Swiper } from 'swiper/react'

const CSwiper = ({children, className, ...props}) => {
  return (
    <Swiper className={`${className ? className : ''}`} {...props}>
      {children}
    </Swiper>
  )
}

export default CSwiper
