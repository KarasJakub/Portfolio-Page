import styled from "styled-components"
import ButtonComponent from "components/Button/ButtonComponent"
import { motion } from "framer-motion"

const NavigationButton = styled(ButtonComponent)`
  background-color: ${({ theme }) => theme.color.dark};
  border: 2px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.grey};
  padding: 10px 40px;
  font-size: 1.8rem;
  border-radius: 30px;
  color: white;
  font-family: Montserrat, sans-serif;
  box-shadow: 0px 0px 30px -16px rgba(255, 255, 255, 1);
  transition: 0.1s background-color ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`

const HeroButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.color.dark};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
  color: white;
  font-family: Montserrat, sans-serif;
  box-shadow: 0px 0px 30px -16px rgba(255, 255, 255, 1);
  transition: 0.1s background-color ease-in-out;
  padding: 15px 35px;
  margin-top: 3.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.grey};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`

const CaseStudiesButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.color.dark};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
  color: white;
  font-family: Montserrat, sans-serif;
  box-shadow: 0px 0px 30px -16px rgba(255, 255, 255, 1);
  transition: 0.1s background-color ease-in-out;
  padding: 15px 50px;
  margin: -2rem 0 5rem 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.grey};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`

const FormButton = styled(ButtonComponent)`
  padding: 15px;
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
