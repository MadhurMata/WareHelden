import React from 'react';

import Layout from '../components/layout.js';
import SEO from '../components/SEO'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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

const Div = styled.div`
  font-family: 'Source Code Pro',cursive;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 2rem 0 3rem;
  @media screen and (max-width: 480px) {
    margin: 0 2%;
  }
  `

const Wrapper = styled.div`
  float: left;
  width: 40%;
  height: auto;
  box-shadow: 0 2px 10px #aaa;
  border: 1px solid #aaa;
  padding: 1rem 1rem 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  @media (max-width: 480px) {
  width: 100%;
  margin-bottom: 2rem;
  }
`

const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const FirstParagraph = styled.p`
  line-height: 1.6;   
  font-family: 'Source Code Pro',cursive;
  font-size: 0.9rem;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: justify;
  @media (max-width: 480px) {
    display: block;
  }
`

const About = ({location}) =>{
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

  console.log('location', location);
  return(
    <Layout pathUrl={location.pathname}>
    <SEO title="About" />
      <Container>
        <Wrapper>
          <BgImg
            className="about-img"
            fluid={data.about.nodes[0].childImageSharp.fluid}
            alt="Esmee image" />
        </Wrapper>
        <FirstParagraph>
          Hello! I am Esmee. I was born in 1994, and am a sociologist who works as a social worker. Since I was young I have been interested in my own true self and that of the people around me. From a young age I started to see the masks we all wear. Some of us just sometimes, but others wear their masks so tight that they are almost glued to their faces. I questioned myself. How did I become who I am right now? Why gets my neighbor so angry so easily all the time? Why do my classmates bully that one girl in our class? How would I have thought, as a child, about the world, if I was not raised as a Christian? What do I do to keep the people around me happy and how does this differ from what makes me happy? How can I start to unravel myself?
          Since I knew my masks came from bad experiences, pain, trauma, and patterns, I realized this works the same way for all of us. I felt so sorry for people that are not able to live their true self, but I realized I could not take off their masks for them. To be able to do this each individual has to find and take the courage to face his or her own darkness, go through their own experiences, accept the things that happened in their life for a hundred percent, and take responsibility for living their own true self.
          Nevertheless, I realized that although I could not help others by taking off their masks, I could inspire them to start to recognize their masks and take steps to take them off. Ware Helden originated from this thought. As Brené Brown expresses in her book ‘The power of vulnerability’, shame increases when we keep our mouths shut. Shame hates to be captured in words. Vulnerability can only create room for growth in ourselves by giving space to shame. This requires a certain openness that takes a lot of courage and can be very confrontational, so that ignoring and denying our own shame often seems a better option than embracing and being open to everything hidden under this shame. Therefore, this platform aims to contribute to opening shame in whatever form it may be, to be together able to find the true hero in ourselves and be able to hold on to this.
        </FirstParagraph>
      </Container>
    </Layout>
  )
}

export default About;