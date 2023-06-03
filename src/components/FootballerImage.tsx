import styled from '@emotion/styled'

import images from 'constants/images'

export const FootballerImage = () => {
  return (
    <FootballerImageContainer>
      <picture>
        <source media="(max-width: 768px)" srcSet={images.footballer.mobile} />
        <source
          media="(min-width: 769px) and (max-width: 996px)"
          srcSet={images.footballer.tablet}
        />
        <img
          className="image"
          src={images.footballer.desktop}
          alt="footballer"
        />
      </picture>
    </FootballerImageContainer>
  )
}

const FootballerImageContainer = styled.div`
  position: absolute;

  .image {
    width: 100%;
    height: auto;
  }

  @media (min-width: 561px) and (max-width: 1200px) {
    left: -50px;
  }

  @media (max-width: 996px) {
    .image {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 767px) {
    position: static;
    display: flex;
    justify-content: center;

    .image {
      max-width: 100%;
      width: 320px;
      height: auto;
    }
  }
`
