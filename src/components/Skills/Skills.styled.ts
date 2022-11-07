import styled from "styled-components"

export const RootWrapper = styled.section`
  width: 100%;
`

export const MobilesWrapper = styled.section`
  width: 100%;
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

  ${({ theme }) => theme.MQ.l} {
    &:before,
    :after {
      width: 20rem;
      transform: translateY(-600%);
    }
    font-size: 4rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  font-family: Montserrat, sans-serif;
  color: ${({ theme }) => theme.color.darkgrey};
  max-width: 30rem;
  min-height: 38rem;
  font-size: 1.8rem;
  margin: 2rem 0;
`
