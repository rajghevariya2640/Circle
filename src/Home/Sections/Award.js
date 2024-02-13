import React from "react";
import CContainer from "../../component/CContainer";
import CRow from "../../component/CRow";
import CCol from "../../component/CCol";
import CHead from "../../component/CHead";
import CSpace from "../../component/CSpace";
import CTypographyTxet from "../../component/CTypographyText";
import Awd1 from "../../assets/image/png/Award1.png";
import Awd2 from "../../assets/image/png/Award2.png";
import Awd3 from "../../assets/image/png/Award3.png";
import Awd4 from "../../assets/image/png/Award4.png";
import Awd5 from "../../assets/image/png/Award5.png";
import Awd6 from "../../assets/image/png/Award6.png";

const Award = () => {
  const award = [
    {
      awardImg: Awd1,
      text: "Market leader across 18 categories",
    },
    {
      awardImg: Awd2,
      text: "Most loved SaaS tool in 2021",
    },
    {
      awardImg: Awd3,
      text: "Category leader in 2022",
    },
    {
      awardImg: Awd4,
      text: "Most recommended tool in 2021",
    },
    {
      awardImg: Awd5,
      text: "Champion in survey tool 2022",
    },
    {
      awardImg: Awd6,
      text: "Top performer spring 2021",
    },
  ];

  return (
    <div className="award-main">
      <CContainer>
        <CRow justify="center">
          <CCol xs={24} lg={20} className="divider">
            <div className="award-spacer">
              <CHead
                badge="awards"
                heading={
                  <>
                    An <b>award winning</b> platform, <b>loved by customers.</b>
                  </>
                }
                align="center"
              />
              <CRow className="award-row">
                {award.map((award, awardIndex) => {
                  return (
                    <CCol xs={12} xl={8}  key={awardIndex}>
                      <CSpace className="single-award">
                        <CSpace className="award-image-wrapper">
                          <img
                            src={award.awardImg}
                            alt={`Award ${awardIndex + 1}`}
                          />
                        </CSpace>
                        <CTypographyTxet>
                          <b>{award.text}</b>
                        </CTypographyTxet>
                      </CSpace>
                    </CCol>
                  );
                })}
              </CRow>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Award;
