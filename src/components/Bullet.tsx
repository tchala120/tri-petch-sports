import type { ReactNode } from 'react'

import styled from '@emotion/styled'

interface BulletProps {
  title: ReactNode
  contentColor?: string
  children: ReactNode
}

export const Bullet = ({ title, contentColor, children }: BulletProps) => {
  return (
    <BulletContainer contentColor={contentColor}>
      {title}

      <div className="bullet-content">{children}</div>
    </BulletContainer>
  )
}

const BulletContainer = styled.div<Pick<BulletProps, 'contentColor'>>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  .bullet-content {
    text-align: left;
    font-size: 20px;
    color: ${({ contentColor }) => contentColor};
  }
`

interface BulletTitleProps {
  no: ReactNode
  noColor?: string
  dashColor?: string
  children: ReactNode
}

export const BulletTitle = ({
  no,
  noColor,
  dashColor,
  children,
}: BulletTitleProps) => {
  return (
    <BulletTitleContainer>
      <BulletNumber no={no} noColor={noColor} dashColor={dashColor} />

      <span className="content">{children}</span>
    </BulletTitleContainer>
  )
}

const BulletTitleContainer = styled.div`
  --font-size: 36px;

  display: flex;
  align-items: center;
  gap: 10px;

  > .content {
    font-size: var(--font-size);
    color: #c2c2c2;
  }

  @media (max-width: 560px) {
    --font-size: 28px;
  }
`

type BulletNumberProps = Pick<BulletTitleProps, 'no' | 'dashColor' | 'noColor'>

const BulletNumber = ({ no, noColor, dashColor }: BulletNumberProps) => {
  return (
    <BulletNumberContainer dashColor={dashColor} noColor={noColor}>
      <span className="bullet-number">{no}</span>

      <div className="bullet-underline" />
    </BulletNumberContainer>
  )
}

const BulletNumberContainer = styled.div<Omit<BulletNumberProps, 'no'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  .bullet-number {
    color: ${({ noColor }) => noColor || '#000'};
  }

  .bullet-underline {
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: ${({ dashColor }) => (dashColor ? dashColor : '#603EBE')};
  }
`

Bullet.Title = BulletTitle
