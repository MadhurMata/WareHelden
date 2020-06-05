import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import "../styles/Buttons.scss"

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
    position: inherit;
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
  align-items: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 0.6em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  margin: 2rem 0;
  a {
    text-decoration: none;
    color: black;
  }
  h3 {
    font-family: "Amatic SC", cursive;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    width: auto;
    padding: 0;
    h1 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`

const ListMedia = styled.ul`
  display: flex;
  justify-content: center;
  align-item: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    justify-content: space-between;
    flex-direction: column;
  }
`
const NavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-item: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    justify-content: space-between;
  }
`

const Item = styled.li`
  list-style: none;
  font-family: "Source Code Pro", cursive;
  font-size: 0.9rem;
  text-align: justify;
  margin: 0 0.8rem;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    width: auto;
    margin: 0 0.3rem;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    transition: all 0.2s;
    color: #999999;
    &:hover {
      color: #fff;
    }
  }xxx
`

const Header = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      icons: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "icons" } }
      ) {
        nodes {
          childImageSharp {
            fixed(width: 20, height: 20) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)
  const titleMargin = path === '/about' ? "1rem" : "1.75rem";

  return (
    <StickyWrapper>
      <Wrapper>
        <Title style={{ margin: titleMargin }}>
          <Link to="/">
            { path === '/about' ? <h3>THE STORY OF</h3> : null }
            <h1>WARE HELDEN</h1>
          </Link>
        </Title>
        <Container>
          <NavBar>
            <Item>
              <Link
                activeStyle={{ color: "#333333" }}
                className="btn btn--stripe"
                style={{ fontSize: "0.8rem", padding: "0.2rem 0.9rem 0.7rem" }}
                to="/"
              >
                Blog
              </Link>
            </Item>
            <Item>
              <Link
                activeStyle={{ color: "#333333" }}
                className="btn btn--stripe"
                style={{ fontSize: "0.8rem", padding: "0.2rem 0.9rem 0.7rem" }}
                to="/about"
              >
                About
              </Link>
            </Item>
            <Item>
              <Link
                activeStyle={{ color: "#333333" }}
                className="btn btn--stripe"
                style={{ fontSize: "0.8rem", padding: "0.2rem 0.9rem 0.7rem" }}
                to="/contact"
              >
                Contact
              </Link>
            </Item>
          </NavBar>
          <ListMedia>
            <Item>
              <a href="https://www.instagram.com/warehelden/">
                <Img
                  className="icon"
                  fixed={data.icons.nodes[0].childImageSharp.fixed}
                  alt="social-media-instagram"
                />
              </a>
            </Item>
            <Item>
              <a href="https://www.facebook.com/warehelden">
                <Img
                  className="icon"
                  fixed={data.icons.nodes[1].childImageSharp.fixed}
                  alt="social-media-facebook"
                />
              </a>
            </Item>
          </ListMedia>
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
