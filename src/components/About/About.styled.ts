import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const AboutWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(17, 17, 17, 1) 90%,
    rgba(14, 24, 30, 1) 100%
  );

  ${({ theme }) => theme.MQ.l} {
    flex-direction: row-reverse;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  width: 90%;
  max-width: 62rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.MQ.l} {
    margin: unset;
  }
`

export const SectionTitle = styled.h2`
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 1);
  margin: 5rem auto;
  text-align: center;

  &:before,
  :after {
    content: "";
    display: inline-block;
    width: 9rem;
    height: 2px;
    background: yellow;
    background-color: rgba(103, 103, 103, 0.5);
    transform: translateY(-300%);
    margin: 0 1rem 0 0;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 9rem;
    height: 2px;
    background: yellow;
    background-color: rgba(103, 103, 103, 0.5);
    transform: translateY(-300%);
    margin: 0 0 0 1rem;
  }
`

export const SectionParagraph = styled.p`
  font-family: Montserrat, sans-serif;
  color: ${({ theme }) => theme.color.darkgrey};
  width: 90%;
  margin: 0 0 2rem 0;

  & strong {
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
  }
`

export const Image = styled(GatsbyImage)`
  width: 24rem;
  max-width: 38rem;
  border: 4px dotted ${({ theme }) => theme.color.primary};
  margin: 3rem auto;

  ${({ theme }) => theme.MQ.l} {
    margin: 0 15rem 0 0;
    width: 30rem;
  }
`

export const Icons = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  justify-content: space-between;

  ${({ theme }) => theme.MQ.l} {
    grid-template-columns: repeat(3, 1fr);
    margin: unset;
    width: 70%;
  }
`

export const IconBar = styled.div`
  display: flex;

  & img {
    max-width: 2.3rem;
    max-height: 2.3rem;
  }

  & p {
    color: ${({ theme }) => theme.color.darkgrey};
    padding-left: 1rem;
  }
`
