import styled from "styled-components"

export const ButtonComponent = styled.button`
  background-color: ${({ theme }) => theme.color.dark};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
  color: white;
  font-family: Montserrat, sans-serif;
  box-shadow: 0px 0px 30px -16px rgba(255, 255, 255, 1);
  transition: 0.1s background-color ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`
