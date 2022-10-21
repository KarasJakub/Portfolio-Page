import styled from "styled-components"

export const GradientWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(26, 56, 76);
  box-shadow: inset 0px 0px 70px 70px rgba(15, 26, 32, 1);
  ${({ theme }) => theme.MQ.l} {
    background: linear-gradient(
      90deg,
      rgba(26, 56, 76, 1) 0%,
      rgba(5, 15, 22, 1) 50%,
      rgba(26, 56, 76, 1) 100%
    );
  }
`
