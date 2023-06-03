import { Col, Row } from 'antd'
import { Carousel } from 'react-responsive-carousel'
import styled from '@emotion/styled'

import { Block } from 'components/Block'
import { ContentTitle } from 'components/ContentTitle'
import { Bullet } from 'components/Bullet'
import { BasketballerImage } from 'components/BasketballerImage'

const info = [
  {
    no: '01',
    title: 'CONNECTION',
    content:
      'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
  },
  {
    no: '02',
    title: 'CONNECTION',
    content:
      'Work with recruiter to increase your chances of finding talented athlete.',
    color: {
      bg: '#F5F4F9',
    },
  },
  {
    no: '03',
    title: 'GROWTH',
    content: 'Save your time, recruit proper athlets for your team.',
    color: {
      bg: '#090C35',
      dash: '#fff',
      content: '#fff',
      no: '#8F6BE8',
    },
  },
]

export const Basketballer = () => {
  const contents = info.map((item) => (
    <Block
      key={item.no}
      style={{
        background: item.color?.bg,
      }}
    >
      <Row className="block-content">
        <Col xs={24} md={16} lg={12}>
          <Bullet
            title={
              <Bullet.Title
                no={item.no}
                dashColor={item.color?.dash}
                noColor={item.color?.no}
              >
                {item.title}
              </Bullet.Title>
            }
            contentColor={item.color?.content}
          >
            {item.content}
          </Bullet>
        </Col>
        <Col md={8} lg={12} />
      </Row>
    </Block>
  ))

  return (
    <BasketballerContainer>
      <Block>
        <Row className="block-content">
          <Col xs={24} md={16} lg={12}>
            <ContentTitle>PLAYERS</ContentTitle>
          </Col>
          <Col xs={24} md={8} lg={12}>
            <BasketballerImage />
          </Col>
        </Row>
      </Block>

      <div className="default-display">{contents}</div>

      <Carousel className="mobile-display" showArrows={false} autoPlay>
        {contents}
      </Carousel>
    </BasketballerContainer>
  )
}

const BasketballerContainer = styled.div`
  position: relative;
`
