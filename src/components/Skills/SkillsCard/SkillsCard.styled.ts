import styled from "styled-components"

export const SkillCardWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  max-height: 6rem;
  background-color: ${({ theme }) => theme.color.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border: 3px solid ${({ theme }) => theme.color.darkpurple};
  margin: 1rem 0;
`

export const Title = styled.h3`
  color: white;
  font-family: Montserrat, sans-serif;
  font-weight: ${({ theme }) => theme.weight.semibold};
  font-size: 2rem;
`

export const Icon = styled.img`
  max-width: 3.5rem;
`
