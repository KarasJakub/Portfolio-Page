import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  align-items: center;
  padding: 2rem;
  z-index: 5;
  transition-timing-function: ease-in;
  transition: 0.2s;

  ${({ theme }) => theme.MQ.s} {
    padding: 2rem 3rem;
  }

  &.showNav {
    opacity: 1;
    background-image: linear-gradient(
      90deg,
      rgba(26, 56, 76, 1) 0%,
      rgba(5, 15, 22, 1) 50%,
      rgba(26, 56, 76, 1) 100%
    );
    box-shadow: inset 0px 53px 70px 40px rgba(15, 26, 32, 1);
  }

  &.showNavTop {
    opacity: 1;
  }

  &.hideNav {
    opacity: 0;
  }
`

export const NavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 170rem;
  margin: auto;
  ${({ theme }) => theme.MQ.l} {
    margin: 3rem auto;
  }
`

export const Logo = styled.img`
  height: 100%;
  max-height: 5.5rem;
  width: 4.5rem;
  max-width: 50vw;
  z-index: 5;
  ${({ theme }) => theme.MQ.l} {
    width: 6rem;
  }
`

export const NavigationList = styled.ul`
  display: none;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.MQ.l} {
    display: flex;
    align-items: center;
    gap: 4rem;
    list-style-type: none;
  }
`

export const NavigationItem = styled.li`
  text-decoration: none;
  color: #cecece;
  font-size: 1.8rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  transition-property: color transform;

  &:hover {
    color: white;
    transform: scale(1.1);
  }
`
