import React from 'react';
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import Layout from '../components/layout.js';
import SEO from '../components/seo'


const Contact = ({ data }) =>{

  return(
    <Layout>
    <SEO title="Contact" description="Contact description goes here" />
    <Container>
      <PageTitle>Contact</PageTitle>
      <ContactForm />
    </Container>
  </Layout>
  )
}

export default Contact;