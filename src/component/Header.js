import { Drawer, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/image/svg/Logo.svg";
import Logo1 from "../assets/image/png/Logo.png";
import CCol from "./CCol";
import CContainer from "./CContainer";
import CLink from "./CLink";
import CMenu from "./CMenu";
import CButton from "./CButton";
import CMneuItem from "./CMneuItem";
import CSpace from "./CSpace";
import CRow from "./CRow";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const { Header } = Layout;
  const [openMenu, setMneuOpen] = useState(false);

  // Stickey Header
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header>
        <div className={`header-main ${isSticky ? "sticky" : ""}`}>
          <CContainer>
            <CRow align="middle" justify="space-between">
              <CCol xs={3} lg={0}>
                <CLink>
                  <Logo />
                </CLink>
              </CCol>
              <CCol xs={1} lg={20}>
                <CSpace className="web-menu">
                  <AppMenu />
                </CSpace>
                <Drawer
                  className="drawer-main"
                  open={openMenu}
                  onClose={() => {
                    setMneuOpen(false);
                  }}
                  placement="left"
                  closable
                >
                  <CLink>
                    <Logo />
                  </CLink>
                  <AppMenu style={{ marginTop: 30 }} isAppMenu />
                </Drawer>
              </CCol>
              <CCol>
                <CSpace className="resp-menu-icon-btn" direction="row" align="center">
                <CSpace className="app-menu-icon">
                    <MenuOutlined 
                    className='menu-icon'
                    onClick={() => {
                      setMneuOpen(true)
                    }} />
                  </CSpace>
                  <CButton className="login-btn">Login</CButton>
                </CSpace>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </Header>
    </>
  );
};

export default Header;

function AppMenu({ isAppMenu = false }) {
  const menu = [
    {
      name: "Feature",
      key: "feature",
    },
    {
      name: "Pricing",
      key: "pricing",
    },
    {
      name: "Testimonials",
      key: "testimonials",
    },
    {
      name: "Resources",
      key: "resources",
    },
    {
      logo: true,
    },
    {
      name: "Company",
      key: "company",
    },
    {
      name: "Contact",
      key: "contact",
    },
  ];
  return (
    <CMenu
      mode={isAppMenu ? "inline" : "horizontal"}
      defaultSelectedKeys={["0"]}
      className="main-menu"
    >
      {menu.map((menu, menuIndex) => {
        return (
          <CMneuItem key={menu.key}>
            {menu.name}
            {menu.logo && <img src={Logo1} alt="Logo" className="web-logo" />}
          </CMneuItem>
        );
      })}
    </CMenu>
  );
}
