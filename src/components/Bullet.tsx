import type { ReactNode } from 'react'

import styled from '@emotion/styled'

interface BulletProps {
  title: ReactNode
  children: ReactNode
}

export const Bullet = ({ title, children }: BulletProps) => {
  return (
    <BulletContainer>
      {title}

      {children}
    </BulletContainer>
  )
}

const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`

interface BulletTitleProps {
  no: ReactNode
  color?: string
  children: ReactNode
}

export const BulletTitle = ({ no, color, children }: BulletTitleProps) => {
  return (
    <BulletTitleContainer>
      <BulletNumber no={no} color={color} />

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

const BulletNumber = ({
  no,
  color,
}: Pick<BulletTitleProps, 'no' | 'color'>) => {
  return (
    <BulletNumberContainer badgeColor={color}>
      {no}

      <div className="bullet-underline" />
    </BulletNumberContainer>
  )
}

const BulletNumberContainer = styled.div<{ badgeColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  > .bullet-underline {
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: ${({ badgeColor }) =>
      badgeColor ? badgeColor : '#603EBE'};
  }
`

Bullet.Title = BulletTitle
