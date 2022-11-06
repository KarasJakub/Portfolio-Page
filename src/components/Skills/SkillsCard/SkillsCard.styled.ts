import styled from "styled-components"

export interface Custom {
  active: boolean
}

export const SkillCardWrapper = styled.div<Custom>`
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
  border-right: 1px solid ${({ active }) => (active ? "#00bbff" : "#2b2b2b")};
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
