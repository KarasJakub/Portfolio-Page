import React from "react"
import * as S from "./Contact.styled"
import SButtons from "components/Buttons/Buttons.styled"
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

type FormData = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const form = React.useRef()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const [isRecaptchaConfirmed, setIsRecaptchaConfirmed] = React.useState(false)
  const recaptchaRef = React.useRef()
  const [isLoading, setIsLoading] = React.useState(false)
  const [formError, setFormError] = React.useState("")
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [successMessage, setSuccessMessage] = React.useState("")

  const onSubmit = () => {
    if (!isRecaptchaConfirmed) {
      setIsSuccess(false)
      return setFormError("You forgot about ReCaptcha :D")
    }

    setIsLoading(true)

    return emailjs
      .sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID as string,
        process.env.GATSBY_EMAILJS_TEMPLATE_MAIN_ID as string,
        form.current,
        process.env.GATSBY_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setIsLoading(false)
        setFormError("")
        setSuccessMessage("Form has been sent, thank you!")
        setIsSuccess(true)
      })
      .catch(() => {
        setIsLoading(false)
        setIsSuccess(false)
        setFormError("Oops.. Something went wrong. Try again later")
      })
  }

  const onError = () => {
    setFormError("Please check the correctness of the completed data again")
  }

  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1
      })
    }
  }, [inView])
  return (
    <S.ContactWrapper ref={ref}>
      <S.ContactTitle
        as={motion.h2}
        animate={animation}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        Get in Touch
      </S.ContactTitle>
      <S.FormWrapper>
        <S.Form
          ref={form}
          onSubmit={handleSubmit(onSubmit, onError)}
          className={isSuccess ? "none" : "flex"}
        >
          <S.TopInputsWrapper>
            <S.Input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className={errors.name && "error"}
              as={motion.input}
              animate={animation}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            />
            <S.Input
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/
              })}
              type="text"
              placeholder="E-mail"
              className={errors.email && "error"}
              as={motion.input}
              animate={animation}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            />
          </S.TopInputsWrapper>
          <S.Textarea
            {...register("message")}
            // as="textarea"
            placeholder="Hey, I am writing to you..."
            className={errors.message && "error"}
            as={motion.textarea}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
          />

          <S.BottomWrapper>
            <S.MotionWrapper
              as={motion.div}
              animate={animation}
              initial={{ opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <ReCAPTCHA
                theme="dark"
                sitekey="6Lcv2vIiAAAAAAGGWr5-nJWdDlUIyftdPCTdJyen"
                onChange={() => setIsRecaptchaConfirmed(true)}
                ref={recaptchaRef}
              />
            </S.MotionWrapper>
            <S.MotionWrapper
              as={motion.div}
              animate={animation}
              initial={{ opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              <SButtons.FormButton submit disabled={isLoading || isSuccess}>
                send into space 😛
              </SButtons.FormButton>
            </S.MotionWrapper>
          </S.BottomWrapper>
        </S.Form>
        <S.FormErrorMessage className={isSuccess ? "none" : "block"}>
          <p>{formError}</p>
        </S.FormErrorMessage>
        <S.FormMessage>
          <p className={isSuccess ? "block" : "none"}>{successMessage}</p>
        </S.FormMessage>
      </S.FormWrapper>
    </S.ContactWrapper>
  )
}

export default Contact
