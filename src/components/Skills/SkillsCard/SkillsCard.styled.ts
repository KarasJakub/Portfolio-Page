import styled from "styled-components"

export interface Custom {
  active: boolean
}

export const SkillCardWrapper = styled.div<Custom>`
  width: 100%;
  max-width: 30rem;
  max-height: 6rem;
  background-color: ${({ active }) => (active ? "#38029A" : "#111111")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border: 3px solid ${({ theme }) => theme.color.darkpurple};
  margin: 1rem 0;
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;
  ${({ theme }) => theme.MQ.l} {
    max-width: 35rem;
    max-height: 8rem;
    padding: 25px 25px;
    border: 5px solid ${({ theme }) => theme.color.darkpurple};
    margin: 0.7rem 0;
  }
`

export const Title = styled.h3`
  color: white;
  font-family: Montserrat, sans-serif;
  font-weight: ${({ theme }) => theme.weight.semibold};
  font-size: 2rem;
`

export const Icon = styled.img`
  max-width: 3.5rem;
  ${({ theme }) => theme.MQ.l} {
    width: 4rem;
  }
`
