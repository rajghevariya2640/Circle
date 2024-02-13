import React, { useState } from "react";
import { ReactComponent as Analysis } from "../../assets/image/svg/AnalysisIcn.svg";
import { ReactComponent as Collect } from "../../assets/image/svg/CollectIcn.svg";
import { ReactComponent as Create } from "../../assets/image/svg/CreateIcn.svg";
import { ReactComponent as Distribute } from "../../assets/image/svg/DistributeIcn.svg";
import CCol from "../../component/CCol";
import CContainer from "../../component/CContainer";
import CHead from "../../component/CHead";
import CRow from "../../component/CRow";
import CSpace from "../../component/CSpace";
import CTab from "../../component/CTab";
import CTabItem from "../../component/CTabItem";
import CTypographyTitle from "../../component/CTypographyTitle";
import CTypographyTxet from "../../component/CTypographyText";
import CButton from "../../component/CButton";
import Tab1 from "../../assets/image/png/Tab1.png";

const BuildForPeople = () => {
  const [activeTabKey, setActiveTabKey] = useState("1");

  const handleTabChange = (key) => {
    setActiveTabKey(key);
  };

  const tabs = [
    {
      icon: <Create />,
      text: "Create",
    },
    {
      icon: <Distribute />,
      text: "Distribute",
    },
    {
      icon: <Collect />,
      text: "Collect",
    },
    {
      icon: <Analysis />,
      text: "Analysis",
    },
  ];

  const tabContent = [
    {
      name: "Create",
    },
    {
      name: "Distribute",
    },
    {
      name: "Collect",
    },
    {
      name: "Analysis",
    },
  ];

  return (
    <div className="bfp-main">
      <CContainer>
        <CRow justify="center">
          <CCol xs={24} lg={20} className="divider">
            <div className="bfp-spacer">
              <CHead
                badge="built for people"
                heading={
                  <>
                    <b>Easy</b> for beginners. <b>Powerful</b> for experts.
                  </>
                }
                align="center"
              />
            </div>
            <CTab
              activeKey={activeTabKey}
              onChange={handleTabChange}
              className="tabs-nav-main"
            >
              {tabs.map((tab, tabIndex) => {
                return (
                  <CTabItem
                    tab={
                      <CSpace size={5} direction="row">
                        {tab.icon}
                        <CTypographyTxet className="tab-link-text">
                          {tab.text}
                        </CTypographyTxet>
                      </CSpace>
                    }
                    key={`${tabIndex + 1}`}
                  ></CTabItem>
                );
              })}
            </CTab>
          </CCol>
        </CRow>
      </CContainer>
      <div className="primary-bg">
        <CContainer>
          <CRow justify="center">
            <CCol xs={24} lg={20}>
              {tabContent.map((tbCon, tbConIndex) => {
                return (
                  <>
                    {activeTabKey === `${tbConIndex + 1}` && (
                      <>
                        <CRow>
                          <CCol xs={24} lg={12}>
                            <CSpace>
                              <CTypographyTitle
                                level={3}
                                className="tab-content-head"
                              >
                                {tbCon.name}
                              </CTypographyTitle>
                              <CTypographyTxet className="tab-content-subHead">
                                Advanced research software
                              </CTypographyTxet>
                              <CTypographyTxet className="body-text">
                                Ask the right questions and get the answers you
                                need with the most secure and collaborative
                                survey platform on the market featuring powerful
                                logic, sophisticated analytics, and built-in
                                automation and integration.
                              </CTypographyTxet>
                              <CButton
                                type="primary"
                                className="tab-content-btn"
                              >
                                Get started for free
                              </CButton>
                            </CSpace>
                          </CCol>
                          <CCol xs={24} lg={12}>
                            <CSpace className="tab-content-image-wrapper">
                              <img src={Tab1} alt="Tab" />
                            </CSpace>
                          </CCol>
                        </CRow>
                      </>
                    )}
                  </>
                );
              })}
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  );
};

export default BuildForPeople;
