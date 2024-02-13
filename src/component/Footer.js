import React from "react";
import CContainer from "./CContainer";
import CRow from "./CRow";
import CCol from "./CCol";
import Map from "../assets/image/png/FooterMap.png";
import CTypographyTxet from "./CTypographyText";
import { List } from "antd";
import CLink from "./CLink";
import CSpace from "./CSpace";
import { ReactComponent as Twitter } from "../assets/image/svg/Twitter.svg";
import { ReactComponent as Linkedin } from "../assets/image/svg/Linkedin.svg";

const Footer = () => {
  const footerLink = [
    {
      heading: "Products",
      links: ["Delta", "Sigma", "Zeta", "Alpha", "Acumen"],
    },
    {
      heading: "Resources",
      links: [
        "Help",
        "Training Videos",
        "Webinars",
        "Request a Demo",
        "Create Surveys",
        "Quiz Maker",
      ],
    },
    {
      heading: "Company",
      links: ["About Us", "Careers", "Team", "Contact Us"],
    },
  ];

  const lowerLink = [
    {
      link: "Privacy Policy ",
    },
    {
      link: " Data & Security ",
    },
    {
      link: "Terms of Service",
    },
    {
      link: "Data & Security",
    },
  ];

  return (
    <footer>
      <div className="upper-footer">
        <CContainer>
          <CRow justify="center">
            <CCol xs={24} lg={20}>
              <CRow justify="space-between" align="middle">
                <CCol xs={0} md={7} lg={5}>
                  <div className="map-section-wrapper">
                    <img src={Map} alt="map" />
                    <CTypographyTxet className="map-text">
                      Made with lots of 😍 in San Francisco
                    </CTypographyTxet>
                  </div>
                </CCol>
                <CCol xs={24} md={16} lg={14}>
                  <CRow gutter={12} className="footer-link-row">
                    {footerLink.map((fl, flIndex) => {
                      return (
                        <CCol xs={24} sm={8} key={flIndex}>
                          <List
                            header={<b>{fl.heading}</b>}
                            className="footer-list"
                          >
                            {fl.links?.map((link, linkIndex) => {
                              return (
                                <List.Item key={linkIndex}>
                                  <CLink>{link}</CLink>
                                </List.Item>
                              );
                            })}
                          </List>
                        </CCol>
                      );
                    })}
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <div className="lower-footer">
        <CContainer>
          <CRow className="divider" justify="space-between">
            <CCol xs={24} lg={9}>
              <CTypographyTxet className="copyright-txt">
                Copyright 2022 Circle. All rights reserved.
              </CTypographyTxet>
            </CCol>
            <CCol xs={24} lg={13}>
              <CSpace direction="row" className="icn-link-wrapper">
                <div className="social-icon-wrapper">
                  <CLink>
                    <Linkedin />
                  </CLink>
                  <CLink>
                    <Twitter />
                  </CLink>
                </div>
                <div>
                  {lowerLink.map((data, index) => {
                    return (
                      <CTypographyTxet className="lower-link" key={index}>
                        <CLink>{data.link}</CLink>
                      </CTypographyTxet>
                    );
                  })}
                </div>
              </CSpace>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </footer>
  );
};

export default Footer;
