import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  padding: 10rem 3rem 0 3rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.MQ.l} {
    padding: 20rem 3rem;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.MQ.l} {
    flex-direction: row;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 45rem;

  ${({ theme }) => theme.MQ.l} {
    margin-right: 10rem;
  }
`

export const Title = styled.h1`
  color: white;
  font-family: Montserrat, sans-serif;
  font-size: 3.5rem;
`

export const TitleParagraph = styled.p`
  color: #707070;
  font-size: 1.8rem;
  padding: 1.5rem 0;
  font-family: Montserrat, sans-serif;
  line-height: 3rem;
`

export const ImageWrapper = styled.div`
  padding: 3rem 1rem 1rem 1rem;
  position: relative;
  max-width: 50rem;
  ${({ theme }) => theme.MQ.l} {
    border: 2px solid ${({ theme }) => theme.color.primary};
    padding: 1rem;
  }
`

export const ContentContainer = styled.article`
  width: 100%;
  max-width: 100rem;
  margin: 4rem 0;
  color: #707070;
  & > p {
    line-height: 3rem;
  }
  & > h3 {
    color: white;
    font-family: Montserrat, sans-serif;
    font-size: 3.2rem;
  }
  & > #technologies {
    color: white;
    font-family: Montserrat, sans-serif;
    font-size: 3.2rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  & > ul li {
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
    padding: 1rem 0;
    line-height: 2rem;
    & > strong {
      color: ${({ theme }) => theme.color.primary};
    }
  }
  & > #technologiesWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${({ theme }) => theme.MQ.l} {
      justify-content: flex-start;
    }
    & > .technologiesIcon {
      max-width: 7rem;
      padding: 0 2rem 2rem 0;
      ${({ theme }) => theme.MQ.l} {
        max-width: 9rem;
      }
    }
  }

  ${({ theme }) => theme.MQ.m} {
    width: 70%;
  }
  ${({ theme }) => theme.MQ.l} {
    width: 85%;
    margin: 10rem 0;
  }
`
