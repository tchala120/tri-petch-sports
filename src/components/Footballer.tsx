import styled from '@emotion/styled'
import { Col, Row } from 'antd'
import { Carousel } from 'react-responsive-carousel'

import { Block } from 'components/Block'
import { ContentTitle } from 'components/ContentTitle'
import { Bullet } from 'components/Bullet'
import { FootballerImage } from 'components/FootballerImage'

const info = [
  {
    no: '01',
    title: 'CONNECTION',
    content:
      'Connect with coaches directly, you can ping coaches to view profile.',
  },
  {
    no: '02',
    title: 'COLLABORATION',
    content:
      'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
    color: {
      bg: '#F5F4F9',
    },
  },
  {
    no: '03',
    title: 'GROWTH',
    content:
      'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
    color: {
      bg: '#5E3DB3',
      dash: '#fff',
      content: '#fff',
    },
  },
]

export const Footballer = () => {
  const contents = info.map((item) => (
    <Block
      style={{
        background: item.color?.bg,
      }}
    >
      <Row className="block-content">
        <Col md={8} lg={12} />
        <Col xs={24} md={16} lg={12}>
          <Bullet
            title={
              <Bullet.Title no={item.no} dashColor={item.color?.dash}>
                {item.title}
              </Bullet.Title>
            }
            contentColor={item.color?.content}
          >
            {item.content}
          </Bullet>
        </Col>
      </Row>
    </Block>
  ))

  return (
    <FootballerContainer>
      <Block>
        <Row className="block-content">
          <Col
            xs={{
              order: 2,
              span: 24,
            }}
            md={{
              order: 1,
              span: 8,
            }}
            lg={{
              order: 1,
              span: 12,
            }}
          >
            <FootballerImage />
          </Col>
          <Col
            xs={{
              order: 1,
              span: 24,
            }}
            md={{
              order: 2,
              span: 16,
            }}
            lg={{
              order: 2,
              span: 12,
            }}
          >
            <ContentTitle>ATHLETS</ContentTitle>
          </Col>
        </Row>
      </Block>

      <div className="default-display">{contents}</div>

      <Carousel className="mobile-display" showArrows={false} autoPlay>
        {contents}
      </Carousel>
    </FootballerContainer>
  )
}

const FootballerContainer = styled.div`
  position: relative;
`
