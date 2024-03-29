import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const CardImage = styled(GatsbyImage)`
  width: 100%;
  transition: 0.5s ease-in-out;
  transition-property: opacity, filter;
`

export const Title = styled.h3`
  font-family: Montserrat, sans-serif;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 2.5rem;
  font-weight: 600;
  position: absolute;
  bottom: 50%;
  transition: 0.2s ease-in-out;
  transition-property: transform opacity;
  opacity: 0;

  ${({ theme }) => theme.MQ.xxl} {
    font-size: 3.2rem;
  }
`

export const Paragraph = styled.p`
  font-family: Montserrat, sans-serif;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  text-align: center;
  width: 90%;
  padding-bottom: 2rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  transition: 0.2s ease-in-out;
  transition-property: transform opacity;
  opacity: 0;

  ${({ theme }) => theme.MQ.xxl} {
    font-size: 1.8rem;
  }
`

export const TechnologiesBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s ease-in-out;
  transition-property: opacity;
`
export const Technology = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.color.grey};
  padding-right: 1rem;
`

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: 24rem;
  max-height: 32rem;
  transition: 0.2s ease-in-out;
  transition-property: transform opacity;
  margin-bottom: 5rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover ${CardImage} {
    filter: grayscale(100%);
    opacity: 0.5;
  }

  &:hover ${Paragraph} {
    opacity: 1;
  }
  &:hover ${Title} {
    transform: translateY(-6rem);
    opacity: 1;
  }
  &:hover ${TechnologiesBar} {
    opacity: 1;
  }

  ${({ theme }) => theme.MQ.m} {
    margin: 2rem;
  }
  ${({ theme }) => theme.MQ.xxl} {
    max-width: 50rem;
    margin: 4rem;

    &:hover ${Paragraph} {
      transform: translateY(3rem);
    }
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
