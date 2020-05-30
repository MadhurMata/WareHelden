import React from 'react';
import Container from '../components/Container'
import ContactForm from '../components/ContactForm'
import Layout from '../components/layout.js';
import SEO from '../components/seo'
import styled from "@emotion/styled"

const PageTitle = styled.h1`
  font-family: 'Amatic SC', cursive;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  padding: 1em 0;
`

const Contact = () =>{

  return(
    <Layout>
    <SEO title="Contact" description="Contact description goes here" />
    <Container>
      <PageTitle>All your words are very welcome. Feel free to share your comments, ideas, questions, tips, and feelings.</PageTitle>
      <ContactForm />
    </Container>
  </Layout>
  )
}

export default Contact;