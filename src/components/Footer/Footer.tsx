import React from "react"
import * as S from "./Footer.styled"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const Footer = () => {
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
    <S.Footer ref={ref}>
      <S.Title
        as={motion.h2}
        animate={animation}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        Let&apos;s make web better place
      </S.Title>
      <S.BottomWrapper>
        <S.BottomLeft>
          <S.LeftCell
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <S.SubLink>Follow me on</S.SubLink>
            <S.Link href="mailto:contact@jakubkaras.pl" target="_blank">
              linkedin
            </S.Link>
          </S.LeftCell>
        </S.BottomLeft>
        <S.BottomRight>
          <S.RightCell
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <S.SubLink>Check my code</S.SubLink>
            <S.Link href="https://github.com/KarasJakub/" target="_blank">
              github
            </S.Link>
          </S.RightCell>
        </S.BottomRight>
        <S.Mail
          as={motion.div}
          animate={animation}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <S.SubLink>Mail me by</S.SubLink>
          <S.Link
            href="https://www.linkedin.com/in/jakub-kara%C5%9B-825244238/"
            target="_blank"
          >
            contact@jakubkaras.pl
          </S.Link>
        </S.Mail>
      </S.BottomWrapper>
    </S.Footer>
  )
}

export default Footer
