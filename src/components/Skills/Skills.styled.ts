import styled from "styled-components"

export const RootWrapper = styled.section`
  width: 100%;
`

export const MobilesWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => theme.MQ.l} {
    display: none;
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

  ${({ theme }) => theme.MQ.l} {
    font-size: 4rem;
    margin: unset;
    margin-top: -2rem;
  }
  ${({ theme }) => theme.MQ.xl} {
    font-size: 3.5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.MQ.l} {
    max-width: 40rem;
    margin-top: 4rem;
  }
`

export const Text = styled.p`
  font-family: Montserrat, sans-serif;
  color: ${({ theme }) => theme.color.darkgrey};
  max-width: 30rem;
  min-height: 38rem;
  font-size: 1.8rem;
  margin: 2rem 0;
  ${({ theme }) => theme.MQ.m} {
    max-width: 30rem;
  }
  ${({ theme }) => theme.MQ.l} {
    min-height: 28rem;
    max-width: unset;
    margin-top: 4rem;
    padding-right: 4rem;
  }
`

export const ComputerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: none;
  margin: 20rem 0;
  min-height: 41rem;
  ${({ theme }) => theme.MQ.l} {
    display: flex;
  }
`

export const ComputerTextWrapper = styled.div`
  width: 100%;
  max-width: 63rem;
  display: flex;
  flex-direction: column;
`

export const MotionWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  ${({ theme }) => theme.MQ.l} {
    max-width: 35rem;
  }
`
