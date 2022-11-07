import styled from "styled-components"

export const SideBarWrapper = styled.aside`
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  display: none;
  ${({ theme }) => theme.MQ.m} {
    display: flex;
  }
`

export const IconLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`

export const Icon = styled.img`
  padding: 10px 25px 10px 0;
`
