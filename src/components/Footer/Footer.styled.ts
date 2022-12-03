import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
`
export const BottomWrapper = styled.div`
  width: 90%;
  max-width: 36rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  padding-bottom: 2rem;
  ${({ theme }) => theme.MQ.m} {
    max-width: 50rem;
  }
`

export const Title = styled.h2`
  font-family: Montserrat, sans-serif;
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;

  ${({ theme }) => theme.MQ.m} {
    font-size: 3.2rem;
  }
`

export const SubLink = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.primary};
  padding: 1rem 0;

  ${({ theme }) => theme.MQ.m} {
    font-size: 2rem;
  }
`

export const Link = styled.a`
  font-family: Montserrat, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.color.grey};
  padding-bottom: 3rem;

  ${({ theme }) => theme.MQ.m} {
    font-size: 2.5rem;
  }
`

export const LeftCell = styled.div`
  text-align: left;
`

export const RightCell = styled.div`
  text-align: right;
`
export const Mail = styled.div`
  text-align: center;
  align-self: center;
`

export const BottomLeft = styled.div`
  width: 50%;
`

export const BottomRight = styled.div`
  width: 50%;
`
