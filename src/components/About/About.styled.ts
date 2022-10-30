import styled from "styled-components"

export const AboutWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(17, 17, 17, 1) 90%,
    rgba(14, 24, 30, 1) 100%
  );
`

export const TextWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

export const SectionParagraph = styled.p`
  font-family: Montserrat, sans-serif;
  color: ${({ theme }) => theme.color.darkgrey};
  width: 90%;
  margin: 0 0 2rem 0;
`
