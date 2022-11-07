import React from "react"
import * as S from "./Footer.styled"

const Footer = () => {
  return (
    <S.Footer>
      <S.Title>Let&apos;s make web better place</S.Title>
      <S.BottomWrapper>
        <S.BottomLeft>
          <S.LeftCell>
            <S.SubLink>Mail me by</S.SubLink>
            <S.Link href="mailto:contact@jakubkaras.pl" target="_blank">
              contact@jakubkaras.pl
            </S.Link>
          </S.LeftCell>
          <S.LeftCell>
            <S.SubLink>Check me on</S.SubLink>
            <S.Link href="https://www.facebook.com" target="_blank">
              facebook
            </S.Link>
          </S.LeftCell>
        </S.BottomLeft>
        <S.BottomRight>
          <S.RightCell>
            <S.SubLink>Check my code</S.SubLink>
            <S.Link href="https://github.com/KarasJakub/" target="_blank">
              github
            </S.Link>
          </S.RightCell>
          <S.RightCell>
            <S.SubLink>Follow me on</S.SubLink>
            <S.Link
              href="https://www.linkedin.com/in/jakub-kara%C5%9B-825244238/"
              target="_blank"
            >
              linkedin
            </S.Link>
          </S.RightCell>
        </S.BottomRight>
      </S.BottomWrapper>
    </S.Footer>
  )
}

export default Footer
