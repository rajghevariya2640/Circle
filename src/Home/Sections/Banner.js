import React from 'react'
import CContainer from '../../component/CContainer'
import CTypograhpyTitle from '../../component/CTypographyTitle'
import CSpace from '../../component/CSpace'
import CTypographyText from '../../component/CTypographyText'
import CButton from '../../component/CButton'
import { ReactComponent as RArrow } from '../../assets/image/svg/Right-arrow.svg'
import BannerImg from '../../assets/image/png/Banner-image.png'

const Banner = () => {
  return (
    <div className='banner-main'>
      <CContainer>
        <CSpace className='banner-text-wrapper'>
          <CTypograhpyTitle level={1}>
            A powerful online engagement tool that’s intuitive and simple to use.
          </CTypograhpyTitle>
          <CTypographyText className='body-text banner-small-text'>
            With stellar one-click reports and unmatched support, see how Circle will make a difference in your business.
          </CTypographyText>
          <CButton type='primary' className='banner-btn'>
            Get started free
            <RArrow />
          </CButton>
        </CSpace>
      </CContainer>
      <CSpace className="banner-image-wrapper">
        <img src={BannerImg} alt='Banner' />
      </CSpace>
    </div>
  )
}

export default Banner
