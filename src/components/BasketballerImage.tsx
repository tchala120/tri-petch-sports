import styled from '@emotion/styled'

import images from 'constants/images'

export const BasketballerImage = () => {
  return (
    <BasketballerImageContainer>
      <picture>
        <source media="(max-width: 767px)" srcSet={images.basketball.mobile} />
        <source
          media="(min-width: 768px) and (max-width: 1250px)"
          srcSet={images.basketball.tablet}
        />
        <img
          className="image"
          src={images.basketball.desktop}
          alt="basketball"
        />
      </picture>
    </BasketballerImageContainer>
  )
}

const BasketballerImageContainer = styled.div`
  position: absolute;
  right: 0;

  .image {
    height: auto;
  }

  @media (min-width: 561px) and (max-width: 1200px) {
    right: -32px;
  }

  @media (max-width: 1250px) {
    .image {
      width: 600px;
      height: auto;
    }
  }

  @media (max-width: 767px) {
    position: static;
    display: flex;
    justify-content: center;

    .image {
      max-width: 100%;
      width: 500px;
      height: auto;
    }
  }
`
