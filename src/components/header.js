import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import Img from "gatsby-image"

import "./header.scss"

const StickyWrapper = styled.div`
position: sticky;
  top: 0;
  z-index: 999; 
  background-color: white;
}
`
const Wrapper = styled.header`
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
  font-size: 2rem;
  a {
    text-decoration: none;
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
    text-decoration: none;
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
  return(
    <StickyWrapper>
      <Wrapper>
        <Title>
          <h1>
            <Link to="/"> Ware Helden</Link>
          </h1>
        </Title>
        <Container>
          <List>
            <Item><Link activeStyle={{color:"#333333"}} to="/">Blog</Link></Item>
            <Item><Link activeStyle={{color:"#333333"}} to="/about/">About</Link></Item>
            <Item><Link activeStyle={{color:"#333333"}} to="/contact/">Contact</Link></Item>
          </List>
          <List>
            <Item><a href="https://www.facebook.com/warehelden"><Img
              className="icon"
              fixed={data.icons.nodes[0].childImageSharp.fixed}
              alt="social-media"/></a>
            </Item>
            <Item><a href="https://www.facebook.com/warehelden/"><Img
              className="icon"
              fixed={data.icons.nodes[1].childImageSharp.fixed}
              alt="Facebook"/></a>
            </Item>
          </List>
        </Container>
      </Wrapper>
    </StickyWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

