import React from "react"
import PropTypes from "prop-types"
import { Global } from '@emotion/core'

import Header from "./header"

import { globalStyles } from '../styles/globalStyles'

const Layout = ({ children, pathUrl }) => {
  return (
   <div
   style={{
     margin: `0 auto`,
    }}
    >
      <Header path={pathUrl}/>
      <main>{children}</main>
      <Global styles={globalStyles} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
