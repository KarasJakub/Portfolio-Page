import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  padding: 10rem 3rem;
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
  font-size: 3.2rem;
`

export const TitleParagraph = styled.p`
  color: #707070;
  font-size: 1.6rem;
  padding: 1.5rem 0;
  font-family: Montserrat, sans-serif;
  line-height: 3rem;
`

export const ImageWrapper = styled.div`
  padding: 1rem;
  position: relative;
  max-width: 50rem;
  ${({ theme }) => theme.MQ.xl} {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`

export const ContentContainer = styled.article`
  width: 100%;
  max-width: 100rem;
  margin: 10rem 0;
  color: #707070;
  & > p {
    line-height: 3rem;
  }
  & > h2 {
    color: white;
    font-family: Montserrat, sans-serif;
    font-size: 3.2rem;
    padding: 2rem 0;
  }

  ${({ theme }) => theme.MQ.m} {
    width: 70%;
  }
  ${({ theme }) => theme.MQ.l} {
    width: 85%;
  }
`
