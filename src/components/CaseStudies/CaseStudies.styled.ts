import styled from "styled-components"

export const ProjectsWrapper = styled.main`
  width: 100%;
`

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 4rem;
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
