import styled from "styled-components"
import ButtonComponent from "components/Button/ButtonComponent"

const NavigationButton = styled(ButtonComponent)`
  padding: 10px 40px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.grey};
  animation: ShowButton 4s;
  @keyframes ShowButton {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
`

const HeroButton = styled(ButtonComponent)`
  padding: 15px 35px;
  margin-top: 3.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.grey};
`

const CaseStudiesButton = styled(ButtonComponent)`
  padding: 15px 50px;
  margin: -2rem 0 5rem 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.grey};
`

const FormButton = styled(ButtonComponent)`
  padding: 15px 0;
  margin: 3rem 0;
  font-size: 1.8rem;
  max-width: 25rem;
  color: ${({ theme }) => theme.color.grey};

  ${({ theme }) => theme.MQ.m} {
    padding: 15px 20px;
  }

  &:disabled {
    filter: grayscale(1);
    &:hover {
      background-color: ${({ theme }) => theme.color.dark};
    }
  }
`

const SButtons = {
  NavigationButton,
  HeroButton,
  CaseStudiesButton,
  FormButton
}

export default SButtons
