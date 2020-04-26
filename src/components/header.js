import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import Img from "gatsby-image"

import "./header.scss"

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  a {
    color: black;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-item: center; 
`

const Item = styled.li`
  list-style: none;
  margin: 0 0.8rem;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color:  #999999;
    &:hover {
      color: #666666;
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    icons: allFile(filter: {relativePath: {}, relativeDirectory: {eq: "icons"}}){
      nodes{
        childImageSharp {
          fixed(width:32, height:32){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
  `)
  console.log(data, "dataaaaaaaa")
  return(
    <Wrapper>
      <Title>
        <h1>
          <Link to="/"> Ware Helden</Link>
        </h1>
      </Title>
      <Container>
        <List>
          <Item><Link activeStyle={{color:"#333333"}} to="/">Home</Link></Item>
          <Item><Link activeStyle={{color:"#333333"}} to="/about/">About</Link></Item>
          <Item><Link activeStyle={{color:"#333333"}} to="/blog/">Blog</Link></Item>
          <Item><Link activeStyle={{color:"#333333"}} to="/contact/">Contact</Link></Item>
        </List>
        <List>
          {data.icons.nodes.map(icon => {
            return <Item><Link to="/"><Img
            className="icon"
            fixed={icon.childImageSharp.fixed}
            alt="social-media"/></Link></Item>
          })}
        </List>
      </Container>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


