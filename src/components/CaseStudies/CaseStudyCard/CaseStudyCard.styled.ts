import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const CardImage = styled(GatsbyImage)`
  width: 100%;
`

export const Title = styled.h3`
  font-family: Montserrat, sans-serif;
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  position: absolute;
  bottom: 40%;
  transition: 0.2s ease-in-out;
  transition-property: transform opacity;
`

export const Paragraph = styled.p`
  font-family: Montserrat, sans-serif;
  color: ${({ theme }) => theme.color.darkgrey};
  font-size: 1.5rem;
  position: absolute;
  text-align: center;
  width: 95%;
  transform: translateY(14rem);
  transition: 0.2s ease-in-out;
  transition-property: transform opacity;
  opacity: 0;
`

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 57rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  max-height: 32rem;
  transition: 0.2s ease-in-out;
  transition-property: transform opacity;
  margin-bottom: 5rem;
  overflow: hidden;

  &:hover ${Paragraph} {
    transform: translateY(4rem);
    opacity: 1;
  }
  &:hover ${Title} {
    transform: translateY(-4rem);
  }
`
