import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const HeroWrapper = styled.section`
  width: 90%;
  padding-top: 20rem;
  margin: auto;
  display: flex;
  flex-direction: column;
`

export const HeadingWrapper = styled.header`
  width: 100%;
`

export const PreName = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.6rem;
  font-family: Montserrat, sans-serif;
`

export const BigHeading = styled.h2`
  color: white;
  font-family: Montserrat, sans-serif;
  font-size: 4.5rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: 1px;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 1);
`

export const SmallHeading = styled.h1`
  color: white;
  font-family: Montserrat, sans-serif;
  font-size: 3.3rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: 0.5px;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 1);

  strong {
    color: ${({ theme }) => theme.color.primary};
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.darkgrey};
  font-family: Montserrat, sans-serif;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.weight.regular};

  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }
`

export const Image = styled(GatsbyImage)`
  width: 90%;
  max-width: 66rem;
  margin: 5rem auto;
`
