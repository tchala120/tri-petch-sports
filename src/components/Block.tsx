import styled from '@emotion/styled'

export const Block = styled.div`
  --padding-horizontal: 32px;

  height: 100%;
  padding: 60px var(--padding-horizontal);

  @media (max-width: 560px) {
    --padding-horizontal: 18px;
  }
`
