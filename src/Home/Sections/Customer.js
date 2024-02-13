import React from "react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import Biocon from "../../assets/image/png/Biocon.png";
import Birla from "../../assets/image/png/CK-Birla.png";
import Capgemini from "../../assets/image/png/Capgemini.png";
import Dell from "../../assets/image/png/Dell.png";
import Shell from "../../assets/image/png/Shell.png";
import Yamaha from "../../assets/image/png/Yamaha.png";
import { ReactComponent as Correct } from "../../assets/image/svg/Correct.svg";
import CCol from "../../component/CCol";
import CContainer from "../../component/CContainer";
import CHead from "../../component/CHead";
import CRow from "../../component/CRow";
import CSpace from "../../component/CSpace";
import CSwiper from "../../component/CSwiper";
import CTypographyTxet from "../../component/CTypographyText";

const Customer = () => {
    const customerSlide = [
        {
            image: Capgemini,
        },
        {
            image: Yamaha,
        },
        {
            image: Biocon,
        },
        {
            image: Dell,
        },
        {
            image: Birla,
        },
        {
            image: Shell,
        },
        {
            image: Capgemini,
        },
        {
            image: Yamaha,
        },
        {
            image: Biocon,
        },
        {
            image: Dell,
        },
        {
            image: Birla,
        },
        {
            image: Shell,
        },
    ];

    const sliderPoint = [
        {
            Text: (
                <>
                    <b>18281</b> signed up last month
                </>
            ),
        },
        {
            Text: (
                <>
                    <b>GDPR</b> & <b>CCPA</b> ready
                </>
            ),
        },
        {
            Text: (
                <>
                    <b>Leader@G2</b> Summer
                </>
            ),
        },
    ];

    return (
        <div className="customer-main">
            <CContainer>
                <CRow justify="center">
                    <CCol lg={20}>
                        <CRow  className="customer-row">
                            <CCol xs={24} className="justify">
                                <CHead align="center" badge="our customer" heading={<>Trusted by <b>100,000+ customers</b> in 90+ countries</>} />
                            </CCol>
                            <CCol xs={24}>
                                <CSwiper
                                    loop
                                    breakpoints={{
                                        1440:{
                                            slidesPerView: 6,
                                            spaceBetween:50
                                        },
                                        1200:{
                                            slidesPerView: 5,
                                        },
                                        991:{
                                            slidesPerView: 4,
                                        },
                                        767:{
                                            slidesPerView: 3
                                        },
                                        0:{
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                    }}
                                    className="customer-slider"
                                >
                                    {customerSlide.map((cs, csIndex) => {
                                        return (
                                            <SwiperSlide key={csIndex}>
                                                <CSpace className="slider-image-wrapper">
                                                    <img src={cs.image} alt={`customer ${csIndex + 1}`} />
                                                </CSpace>
                                            </SwiperSlide>
                                        );
                                    })}
                                </CSwiper>
                            </CCol>
                            <CCol xs={24}>
                                <CRow justify="center">
                                    <CCol xs={24} md={20} lg={20} xl={15}>
                                        <CSpace direction="row" className="slider-point-main">
                                            {sliderPoint.map((sp, spIndex) => {
                                                return (
                                                    <CSpace direction="row" size={10} align="center">
                                                        <Correct />
                                                        <CTypographyTxet className="slider-point">
                                                            {sp.Text}
                                                        </CTypographyTxet>
                                                    </CSpace>
                                                );
                                            })}
                                        </CSpace>
                                    </CCol>
                                </CRow>
                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Customer;
