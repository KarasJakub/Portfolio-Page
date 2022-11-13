import styled from "styled-components"

export const ContactWrapper = styled.section`
  width: 100%;

  ${({ theme }) => theme.MQ.xl} {
    margin-bottom: 15rem;
  }
`

export const ContactTitle = styled.h2`
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

  ${({ theme }) => theme.MQ.l} {
    &:before,
    :after {
      width: 20rem;
      transform: translateY(-600%);
    }
    font-size: 4rem;
  }
`

export const FormWrapper = styled.div`
  width: 90%;
  max-width: 75rem;
  margin: 0 auto;
  ${({ theme }) => theme.MQ.m} {
    width: 80%;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  &.none {
    display: none;
  }

  &.flex {
    display: flex;
  }
`
export const TopInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.MQ.m} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Input = styled.input`
  border-bottom: 5px solid ${({ theme }) => theme.color.darkpurple};
  border-radius: 0.5rem;
  padding: 2rem;
  color: ${({ theme }) => theme.color.grey};
  font-size: 1.4rem;
  width: 100%;
  outline: none;
  transition: border 0.1s ease-in-out;

  &:focus {
    border-bottom: 5px solid #bbbbbb;
  }

  &.error {
    border-bottom: 5px solid red;
  }

  ${({ theme }) => theme.MQ.m} {
    width: 48%;
  }
`

export const Textarea = styled(Input)`
  min-height: 15rem;
  max-height: 35rem;
  min-width: 100%;
  max-width: 100%;
  height: 20rem;
  margin-bottom: 3rem;
`

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.MQ.m} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FormErrorMessage = styled.div`
  width: 100%;
  padding: 1rem;

  & p {
    text-align: center;
    color: white;
  }

  &.none {
    display: none;
  }

  &.block {
    display: block;
  }
`

export const FormMessage = styled.div`
  width: 100%;
  padding: 1rem;

  & p {
    text-align: center;
    color: white;
  }

  &.none {
    display: none;
  }

  &.block {
    display: block;
  }
`
