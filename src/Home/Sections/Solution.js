import React from 'react'
import CContainer from '../../component/CContainer'
import CCol from '../../component/CCol'
import CRow from '../../component/CRow'
import CHead from '../../component/CHead'
import CSpace from '../../component/CSpace'
import SolutionImg from '../../assets/image/png/Solution.png'
import CTypographyTxet from '../../component/CTypographyText'
import CButton from '../../component/CButton'

const Solution = () => {
  return (
    <div className='solution-main'>
      <CContainer>
        <CRow justify='center'>
                  <CCol xs={24} lg={20} className="divider">
                      <div className="solution-spacer">
                      <CRow align='middle' justify="space-between">
                          <CCol xs={24} lg={12}>  
                              <CHead heading={<>Looking for a <b>solution</b> for your business?</>} />
                              <CTypographyTxet className="body-text">Check out Sogolytics enterprise feedback and experience management platform.</CTypographyTxet>
                              <CSpace direction="row" className="solution-btn-wrapper">
                                  <CButton type="primary">Learn more</CButton>
                                  <CButton>Schedule a consultation</CButton>
                              </CSpace>
                          </CCol>
                          <CCol xs={24} lg={10}>
                              <CSpace className="solution-image-wrapper">
                                  <img src={SolutionImg} alt='Solution' />
                              </CSpace>
                          </CCol>
                          </CRow>
                        </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Solution
