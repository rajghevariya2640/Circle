import React from 'react'
import CContainer from '../../component/CContainer'
import CRow from '../../component/CRow'
import CCol from '../../component/CCol'
import CHead from '../../component/CHead'
import CSpace from '../../component/CSpace'
import CTypographyTxet from '../../component/CTypographyText'
import CButton from '../../component/CButton'
import Card1 from '../../assets/image/png/Card1.png'
import Card2 from '../../assets/image/png/Card2.png'
import Card3 from '../../assets/image/png/Card3.png'

const Resources = () => {

    const cardData = [
        {
            image: Card1,
            head: 'Excepteur sint occaecat cupidatat non proident',
            text1: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
            text2: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli',
        },
        {
            image: Card2,
            head: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam',
            text1: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
            text2: 'nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit ',
        },
        {
            image: Card3,
            head: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            text1: 'Coluptatem accusantium doloremque laudantium, totam rem aperiam',
            text2: 'Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        },
    ]

  return (
      <>
          <div className="blank_space">
              <CContainer>
              <CRow justify="center">
                      <CCol xs={24} lg={20} className="divider">
                      </CCol>
                    </CRow>
              </CContainer>
          </div>
          <div className="resource-main">
              <CContainer>
                    <div className='resource-section'>
                        <CHead badge="Resources" heading={<><b>Stay</b> in the <b>know</b></>} align="center" boxShadow={true} />
                        <CRow gutter={{xs:15, sm:20, md:30}} className="card-row">
                            {
                                cardData.map((card, cardIndex) => {
                                    return (
                                        <CCol xs={24} md={12} xl={8}>
                                            <CSpace className="single-card">
                                                <div className='card-image-wrapper'>
                                                    <img src={card.image} alt={`card ${cardIndex + 1}`} />
                                                </div>
                                                <CTypographyTxet className="card-head"><b>{card.head}</b></CTypographyTxet>
                                                <CSpace className="body-text-wrapper">
                                                    <CTypographyTxet className="body-text">{card.text1}</CTypographyTxet>
                                                    <CTypographyTxet className="body-text">{card.text2}</CTypographyTxet>
                                                </CSpace>
                                                <CButton className="card-btn" type="primary">Read more</CButton>
                                        </CSpace>
                                        </CCol>
                                    )
                                })
                            }
                        </CRow>
                    </div>
              </CContainer>
          </div>
    </>
  )
}

export default Resources
