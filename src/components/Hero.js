import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Container from "./Container"

const Wrapper = styled.section`
  width: 50%;
  box-shadow: 0 2px 10px #aaa;
  border: 1px solid #aaa;
  padding: 1rem 1rem 1rem;
  margin-bottom: 2rem;
`
const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: auto;
`

const Title = styled.h1`
  display: inline-block;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 0 1rem;
`

const Date = styled.p`
  padding-top: 1rem;
  display: inline-block;
  font-family: "Source Code Pro", cursive;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: justify;
  color: #999999;
`

const Div = styled.div`
    display: flex;
 font-family: 'Source Code Pro',cursive;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: justify;
  `

const FirstParagraph = styled.p`
line-height: 1.6;   font-family: 'Source Code Pro',cursive;
  font-size: 0.9rem;
  font-weight: 400;
     font-size: 0.9rem;

`

const Hero = props => (
  <Div>
    <Wrapper /*height={props.height}*/>
      <BgImg fluid={props.image.fluid} backgroundColor={"#eeeeee"} />
      <Date>{props.date}</Date>
    </Wrapper>
    <Container>
      <Title>{props.title}</Title>
      <FirstParagraph>
        My 2019 did not run as expected. Quite unexpectedly, I had to let go my
        dear love, while I did not want this at all. I went through incredible
        pain, because I decided to let him follow his own path. I have never
        felt so abandoned and lonely. Running away in distractions was tempting,
        but I chose to accept the pain and go through it. I decided to spend
        many days in bed, I cried so so much, I seeked for help from my loved
        ones and got support from a coach. Instead of being mad at the other,
        the situation and the world, I decided to continue to inhale and exhale
        love. Also towards the one who, in my opinion, had let me down so badly,
        because no matter how unfair everything felt I still believe he has a
        beautiful heart. For me that is ultimately true love. That you wish the
        other the best, even if this means that you are no longer part of
        someone's life.
      </FirstParagraph>
    </Container>
  </Div>
)

export default Hero
