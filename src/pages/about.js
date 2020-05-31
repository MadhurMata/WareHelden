import React from 'react';

import Layout from '../components/layout.js';
import SEO from '../components/seo'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Container from "../components/Container"

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #edae9b;
  height: 20vh;
  width: 100%;
  text-align: center;
  
 h2 {
  font-family: 'Source Code Pro', cursive;
  font-size: 2rem;
  font-weight: 700;
  color: #ec6464;
  margin: 0;
}
  
  `

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-indent: 40px;
`
const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 6px -6px #4e49496b, 0 -8px 6px -6px #000;
`
const TextContainer = styled.div`
  padding: 0 2rem 0 0;
  text-align: justify;
  display: flex;
  flex-direction: column;
  h3 {
    padding-bottom: 1rem;
     font-weight: 550;
  }
`

const ImageContainer = styled.div`
  padding 2rem;
  height: 100%;
  width: 100%;
  h3 {
    text-indent: 0;
    text-align: center;
    margin-top: 0.5rem;
  }
`

const StyledImg = styled(Img)`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`

const SecondSection = styled.div`
  padding: 1rem 2rem;
  background-color: #f0e6e5;
  color: #4e4a47;
  text-align: justify;
    box-shadow: 0 8px 6px -6px #928a8a;

  z-index: -99;
`

const ThirdSection = styled.div`
  padding: 1rem 2rem;
  background-color: #edae9b;
  color: #4e4a47;
  text-align: justify;
    z-index: -999;
`

const About = () =>{
  const data = useStaticQuery(graphql`
  query {
    about: allFile(filter: {relativePath: {}, relativeDirectory: {eq: "about"}}){
      nodes{
        childImageSharp {
          fluid(maxWidth: 400){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `)

  return(
    <Layout>
    <SEO title="About" />
      <Container>
        <Title>
          <h2>The Story of</h2>
          <h1>Ware Helden</h1>
        </Title>
        <Main>
          <FirstSection>
            <ImageContainer>
              <StyledImg
                className="about-img"
                fluid={data.about.nodes[0].childImageSharp.fluid}
                alt="Esmee image"/>
            <h3>Hello! I am Esmee</h3>
            </ImageContainer>
            <TextContainer>
              <p>
                I was born in 1994, and am a sociologist who works as a social worker. Since I was young I have been interested in my own true self and that of the people around me. From a young age I started to see the masks we all wear. Some of us just sometimes, but others wear their masks so tight that they are almost glued to their faces.
                I questioned myself. How did I become who I am right now? Why gets my neighbor so angry so easily all the time? Why do my classmates bully that one girl in our class? How would I have thought, as a child, about the world, if I was not raised as a Christian? What do I do to keep the people around me happy and how does this differ from what makes me happy? How can I start to unravel myself?
              </p>
            </TextContainer>
          </FirstSection>
          <SecondSection>
            <p>
              Since I knew my masks came from bad experiences, pain, trauma, and patterns, I realized this works the same way for all of us. I felt so sorry for people that are not able to live their true self, but I realized I could not take off their masks for them. To be able to do this each individual has to find and take the courage to face his or her own darkness, go through their own experiences, accept the things that happened in their life for a hundred percent, and take responsibility for living their own true self.
            </p>
          </SecondSection>
          <ThirdSection>
            <p>
              Nevertheless, I realized that although I could not help others by taking off their masks, I could inspire them to start to recognize their masks and take steps to take them off. Ware Helden originated from this thought. As Brené Brown expresses in her book ‘The power of vulnerability’, shame increases when we keep our mouths shut. Shame hates to be captured in words. Vulnerability can only create room for growth in ourselves by giving space to shame. This requires a certain openness that takes a lot of courage and can be very confrontational, so that ignoring and denying our own shame often seems a better option than embracing and being open to everything hidden under this shame. Therefore, this platform aims to contribute to opening shame in whatever form it may be, to be together able to find the true hero in ourselves and be able to hold on to this.
            </p>
          </ThirdSection>
        </Main>
      </Container>
    </Layout>
  )
}

export default About;