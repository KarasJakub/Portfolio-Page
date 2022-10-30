import styled from "styled-components"
import ButtonComponent from "components/Button/ButtonComponent"

const NavigationButton = styled(ButtonComponent)`
  padding: 10px 40px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.grey};
`

const HeroButton = styled(ButtonComponent)`
  padding: 15px 35px;
  margin-top: 3.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.grey};
`

const SButtons = {
  NavigationButton,
  HeroButton
}

export default SButtons

// export const FormButton = styled(ButtonComponent)`
//     padding-top: 100px;
//     color: blue;
// `
