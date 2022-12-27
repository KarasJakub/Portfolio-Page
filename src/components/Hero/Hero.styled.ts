import styled from "styled-components"

export const HeroWrapper = styled.section`
  width: 90%;
  padding-top: 15rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.MQ.m} {
    height: 100vh;
    max-height: 110rem;
  }
  ${({ theme }) => theme.MQ.l} {
    flex-direction: row;
  }
  ${({ theme }) => theme.MQ.xl} {
    padding-top: 10rem;
  }
`

export const HeadingWrapper = styled.header`
  max-width: 60rem;
  ${({ theme }) => theme.MQ.l} {
    width: 50%;
  }
  ${({ theme }) => theme.MQ.xxl} {
    margin-right: 10rem;
  }
`

export const PreName = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.6rem;
  font-family: Montserrat, sans-serif;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 1);
  ${({ theme }) => theme.MQ.xl} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.MQ.xl} {
    line-height: 2rem;
  }
`

export const BigHeading = styled.h2`
  color: white;
  font-family: Montserrat, sans-serif;
  font-size: 4.5rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: 1px;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 1);

  ${({ theme }) => theme.MQ.xl} {
    font-size: 7rem;
    line-height: 9rem;
  }
`

export const SmallHeading = styled.h1`
  max-width: 50rem;
  color: white;
  font-family: Montserrat, sans-serif;
  font-size: 3.3rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: 0.5px;
  line-height: 3.5rem;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 1);

  strong {
    color: ${({ theme }) => theme.color.primary};
  }

  ${({ theme }) => theme.MQ.xl} {
    font-size: 4.8rem;
    line-height: 5rem;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.darkgrey};
  font-family: Montserrat, sans-serif;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.weight.regular};
  max-width: 60rem;
  padding-top: 1.5rem;

  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }

  ${({ theme }) => theme.MQ.xl} {
    line-height: 3rem;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 66rem;
  margin: 5rem auto;

  ${({ theme }) => theme.MQ.xxl} {
    margin: 0 0 0 10rem;
  }
`
