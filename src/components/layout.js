import React from "react"
import PropTypes from "prop-types"
import { Global } from '@emotion/core'

import Header from "./header"
import Footer from './footer/footer'

import "./layout.css"
import { globalStyles } from '../styles/globalStyles'

const Layout = ({ children }) => {

  return (
   <div
   style={{
     margin: `0 auto`,
     maxWidth: 960,
     padding: `0 1.0875rem 1.45rem`,
    }}
    >
      <Header/>
      <main>{children}</main>
      <Footer/>
      <Global styles={globalStyles} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
