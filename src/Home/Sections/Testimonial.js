import { Modal } from "antd";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay,EffectFade, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Video from "../../assets/Video/Testimonial1.mp4";
import { ReactComponent as PlayBtn } from "../../assets/image/svg/PlayBtn.svg";
import CButton from "../../component/CButton";
import CCol from "../../component/CCol";
import CContainer from "../../component/CContainer";
import CHead from "../../component/CHead";
import CRow from "../../component/CRow";
import CSpace from "../../component/CSpace";
import CSwiper from "../../component/CSwiper";
import Paypal from "../../assets/image/png/Paypal.png";
import CTypographyTxet from "../../component/CTypographyText";
import CustomNavigation from "../../component/CustomNavigation";

const Testimonial = () => {
  // Open Video
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
    
    const testimonial = [
        {
            review: '"I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."',
            name: 'Michel Dedrick',
            job: 'Senior Conversion Optimizer',
        },
        {
            review: `"Professor Davis's passion for teaching and vast knowledge make learning an enjoyable experience."`,
            name: 'Robert Davis',
            job: 'Financial Analyst',
        },
        {
            review: `"Rodriguez's culinary mastery and dedication to perfection elevate every dining experience."`,
            name: 'Carlos Rodriguez',
            job: 'Marketing Specialist',
        },
    ]

  return (
    <div className="testimonial-main">
      <CContainer>
        <CRow justify="center">
          <CCol xs={24} lg={20}>
            <CRow align="middle">
              <CCol xs={24} lg={7}>
                <CHead
                  badge="Testimonials"
                  heading={
                    <>
                      See how customers <b>drive impact</b>
                    </>
                  }
                  className="testimonial-heading"
                />
                <CButton type="primary" className="testimonial-btn">
                  See case studies
                </CButton>
              </CCol>
              <CCol xs={24} lg={17}>
                <CSwiper
                  spaceBetween={30}
                  effect={"fade"}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                        nextEl: '.bestNext',
                        prevEl: '.bestPrev',
                    }}
                  modules={[EffectFade,Autoplay, Navigation]}
                  className="testimonial-slider"
                              >
                                  <CustomNavigation prevClass="bestPrev" nextClass="bestNext" />
                  {testimonial.map((ts, tsIndex) => {
                    return (
                      <SwiperSlide className="single-testimonial" key={tsIndex}>
                        <CSpace className="testimonial-img-wrapper">
                          <CButton
                            type="primary"
                            onClick={showModal}
                            className="video-btn"
                          >
                            <PlayBtn />
                          </CButton>
                          <CSpace className="text-content-main">
                            <div className="payment-method-wrapper">
                              <img src={Paypal} />
                            </div>
                            <CTypographyTxet className="body-text client-reaview">
                              {ts.review}
                            </CTypographyTxet>
                            <CSpace className="client-info">
                              <CTypographyTxet>
                                <b>{ts.name}</b>
                              </CTypographyTxet>
                              <CTypographyTxet>
                                {ts.job}
                              </CTypographyTxet>
                            </CSpace>
                          </CSpace>
                        </CSpace>
                      </SwiperSlide>
                    );
                  })}
                </CSwiper>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <Modal visible={visible} onCancel={handleCancel} footer={null} className="video-model">
          <video
            width="100%"
            height="100%"
            controls
            autoPlay
            poster="path_to_your_poster_image.jpg"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal>
      </CContainer>
    </div>
  );
};

export default Testimonial;
