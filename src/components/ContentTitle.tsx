import type { ReactNode } from 'react'

import styled from '@emotion/styled'

interface ContentTitleProps {
  children: ReactNode
}

export const ContentTitle = ({ children }: ContentTitleProps) => {
  return <Title>{children}</Title>
}

const Title = styled.span`
  --font-size: 90px;

  font-size: var(--font-size);
  font-weight: 400;
  color: #e7e7e7;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (max-width: 560px) {
    --font-size: 50px;
  }
`
