import React from "react";
import CButton from "../../component/CButton";
import CCol from "../../component/CCol";
import CContainer from "../../component/CContainer";
import CHead from "../../component/CHead";
import CRow from "../../component/CRow";
import CSpace from "../../component/CSpace";
import CTypographyTxet from "../../component/CTypographyText";
import Image from "../../assets/image/png/Promise.png";

const OurPromise = () => {
  return (
    <div className="promise-main">
      <CContainer>
        <CRow justify="center">
          <CCol xs={24} lg={20} className="divider">
            <div className="promise-spacer">
              <CRow align="middle">
                <CCol xs={24} lg={12}>
                  <CSpace>
                    <CHead
                      heading={
                        <>
                          Tool <b>built for people.</b>
                        </>
                      }
                      badge="our promise"
                    />
                    <CSpace className="promise-info-wrapper">
                      <CTypographyTxet className="body-text">
                        Whether you want to edit your Google Docs, resolve Jira
                        issues, or collaborate over Zoom.
                      </CTypographyTxet>
                      <CTypographyTxet className="body-text">
                        Circle has 100+ integrations with tools you already use
                        and love.
                      </CTypographyTxet>
                    </CSpace>
                    <CButton type="primary" className="promise-btn">
                      Get started free
                    </CButton>
                  </CSpace>
                </CCol>
                <CCol xs={24} lg={12}>
                  <CSpace className="promise-image-wrapper">
                    <img src={Image} alt="promise" />
                  </CSpace>
                </CCol>
              </CRow>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default OurPromise;
