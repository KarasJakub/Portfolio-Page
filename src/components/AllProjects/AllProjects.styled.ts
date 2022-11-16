import styled from "styled-components"

export const ContentWrapper = styled.section`
  width: 90%;
  padding-top: 15rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 140rem;

  ${({ theme }) => theme.MQ.m} {
    flex-direction: row;
  }
  ${({ theme }) => theme.MQ.xl} {
    padding-top: 20rem;
  }
`
